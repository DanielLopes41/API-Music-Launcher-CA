import { FastifyRequest, FastifyReply } from 'fastify'
import z, { ZodError } from 'zod'
import { makeLoginUseCase } from '@/factories/make-login-use-case'
import { NotAllowedError } from '@/errors/not-allowed-error'
import { InvalidCredentialsError } from '@/errors/user-alredy-exists-error'
import { AlreadyExistsUserError } from '@/errors/already-exists-user-error'
import { makeCreateUserUseCase } from '@/factories/make-create-use-case'

export async function LoginController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const loginSchema = z.object({
      email: z.email(),
      password: z.string(),
    })
    const data = loginSchema.parse(request.body)
    const loginUseCase = makeLoginUseCase()

    const isValidLogin = await loginUseCase.execute({
      email: data.email,
      password: data.password,
    })

    if (!isValidLogin) {
      throw new NotAllowedError()
    }

    const accessToken = await reply.jwtSign(
      {},
      { sub: String(isValidLogin.user.id), expiresIn: '15m' },
    )

    const refreshToken = await reply.jwtSign(
      {},
      { sub: String(isValidLogin.user.id), expiresIn: '7d' },
    )

    reply.setCookie('refreshToken', refreshToken, {
      httpOnly: true,
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
    })

    return reply
      .status(200)
      .send({ accessToken, message: 'Login completed successfully' })
  } catch (error) {
    if (error instanceof InvalidCredentialsError) {
      return reply.status(401).send({ message: error.message })
    }
    if (error instanceof NotAllowedError) {
      return reply.status(403).send({ message: error.message })
    }
    return reply.status(500).send({ message: 'Internal server error' })
  }
}

export async function CreateUserController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const createUserUseCase = await makeCreateUserUseCase()

    const createUserSchema = z.object({
      email: z.email(),
      password: z
        .string()
        .min(8, { message: 'Password must be at least 8 characters long.' })
        .max(200, { message: 'Password must be at most 200 characters long.' })
        .regex(/[a-z]/, {
          message: 'Password must contain at least one lowercase letter.',
        })
        .regex(/[A-Z]/, {
          message: 'Password must contain at least one uppercase letter.',
        }),
    })

    const data = createUserSchema.parse(request.body)

    await createUserUseCase.execute({
      email: data.email,
      password: data.password,
    })

    return reply.status(201).send({ message: 'success' })
  } catch (error: unknown) {
    const err = error as { code?: string; [k: string]: unknown }
    if (error instanceof AlreadyExistsUserError) {
      return reply.status(409).send({ message: error.message })
    }

    if (error instanceof ZodError) {
      return reply
        .status(400)
        .send({ message: 'Invalid data.', issues: error.issues })
    }

    reply.server.log.error({ err, route: '/user', body: request.body })
    return reply.status(500).send({ message: 'Internal server error' })
  }
}

export async function RefreshTokenController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const refreshToken = request.cookies.refreshToken
    if (!refreshToken) {
      return reply.status(401).send({ message: 'Refresh token missing.' })
    }

    const payload = (await reply.server.jwt.verify(refreshToken)) as {
      sub: string
    }

    const newAccessToken = await reply.jwtSign(
      {},
      { sub: payload.sub, expiresIn: '15m' },
    )

    const newRefreshToken = await reply.jwtSign(
      {},
      { sub: payload.sub, expiresIn: '7d' },
    )

    reply.setCookie('refreshToken', newRefreshToken, {
      httpOnly: true,
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
    })

    return reply.status(200).send({ accessToken: newAccessToken })
  } catch (error) {
    return reply
      .status(401)
      .send({ message: 'Invalid or expired refresh token.' })
  }
}
