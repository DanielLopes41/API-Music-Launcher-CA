import { NotAllowedError } from '@/errors/not-allowed-error'
import { MusicNotFoundError } from '@/errors/music-not-found-error'
import { makeFetchUserMusicsUseCase } from '@/factories/make-fetch-user-musics-use-case'
import { makeSyncMusicWithUserUseCase } from '@/factories/make-sync-music-with-user-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import z from 'zod'
import { ZodError } from 'zod/v3'

export async function FetchUserMusicsController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const userId = request.userId
    if (!userId) {
      throw new NotAllowedError()
    }

    const fetchUserMusicsUseCase = makeFetchUserMusicsUseCase()
    const musics = await fetchUserMusicsUseCase.execute({ userId })

    return reply.status(200).send(musics)
  } catch (err: unknown) {
    if (err instanceof NotAllowedError) {
      return reply.status(403).send({ message: err.message })
    }
    console.error(err)
    return reply
      .status(500)
      .send({ message: `Internal Server Error, ${String(err)}` })
  }
}

export async function SyncMusicWithUserController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const paramsSchema = z.object({ musicId: z.string() })
    const { musicId } = paramsSchema.parse(request.params)

    const userId = request.userId
    if (!userId) {
      throw new NotAllowedError()
    }

    const syncUseCase = makeSyncMusicWithUserUseCase()
    await syncUseCase.execute({ musicId, userId })

    return reply.status(204).send()
  } catch (err: unknown) {
    if (err instanceof ZodError) {
      return reply
        .status(400)
        .send({ message: 'Validation error', issues: err.format() })
    }
    if (err instanceof MusicNotFoundError) {
      return reply.status(404).send({ message: err.message })
    }
    if (err instanceof NotAllowedError) {
      return reply.status(403).send({ message: err.message })
    }
    console.error(err)
    return reply
      .status(500)
      .send({ message: `Internal Server Error, ${String(err)}` })
  }
}
