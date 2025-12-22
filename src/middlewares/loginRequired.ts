import { FastifyReply, FastifyRequest } from 'fastify'

export async function loginRequired(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const payload = await request.jwtVerify<{ sub: string }>()
    const { sub } = payload

    if (!sub) {
      return reply.status(401).send({ message: 'Unauthorized' })
    }

    request.userId = sub
  } catch (error) {
    return reply.status(401).send({ message: 'Unauthorized' })
  }
}
