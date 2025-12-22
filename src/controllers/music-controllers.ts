import { ConversionError } from '@/errors/conversion-error'
import { NotAllowedError } from '@/errors/not-allowed-error'
import { makeCreateMusicByFileUseCase } from '@/factories/make-create-music-by-file-use-case'
import { makeDownloadMusicUseCase } from '@/factories/make-download-music-use-case'
import { makeDeleteMusicUseCase } from '@/factories/make-delete-music-use-case'
import { makeFetchAllMusicsUseCase } from '@/factories/make-fetch-all-musics-controller'
import { uploadToCloudinary } from '@/infra/cloudnary'
import { FastifyReply, FastifyRequest } from 'fastify'
import z from 'zod'
import { ZodError } from 'zod/v3'

export async function UploadMusicController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const createMusicUseCase = makeCreateMusicByFileUseCase()

  let file
  try {
    file = await request.file()

    if (!file) {
      return reply.status(400).send({ error: 'No file uploaded' })
    }

    const isValidType = /^(audio|video)\//.test(file.mimetype)
    if (!isValidType) {
      return reply.status(400).send({
        error: 'Invalid file type. Only audio and video files are allowed.',
        receivedType: file.mimetype,
      })
    }

    const buffer = await file.toBuffer()

    const MAX_SIZE_BYTES = 200 * 1024 * 1024 // 200MB
    if (buffer.length > MAX_SIZE_BYTES) {
      return reply.status(413).send({ error: 'File is too large (Max: 200MB)' })
    }

    const { url, fileName } = await uploadToCloudinary(buffer)

    if (!request.userId) {
      return reply.status(401).send({ error: 'Unauthorized: userId missing' })
    }

    await createMusicUseCase.execute({
      userId: request.userId,
      url,
      fileName,
    })

    return reply.status(201).send({ url, fileName })
  } catch (err: unknown) {
    if (
      typeof err === 'object' &&
      err !== null &&
      'code' in err &&
      typeof (err as { code: unknown }).code === 'string' &&
      (err as { code: string }).code === 'FST_REQ_FILE_TOO_LARGE'
    ) {
      return reply
        .status(413)
        .send({ error: 'File size limit exceeded (Max: 200MB)' })
    }
    return reply
      .status(500)
      .send({ message: `Internal Server Error, ${String(err)}` })
  }
}
export async function DownloadMusicController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const downloadBodySchema = z.object({
      url: z.url(), // Garante que é uma string e tem formato de URL
    })

    const { url } = downloadBodySchema.parse(request.body)
    if (!url) {
      throw new ConversionError('Url is missing')
    }

    const userId = request.userId
    if (!userId) {
      throw new NotAllowedError()
    }

    const downloadMusicUseCase = makeDownloadMusicUseCase()

    const result = await downloadMusicUseCase.execute({
      url,
      userId,
    })
    return reply.status(201).send({
      musicId: result.musicId,
      cloudinaryUrl: result.cloudinaryUrl,
      thumbnailUrl: result.thumbnailUrl,
    })
  } catch (err: unknown) {
    if (err instanceof ConversionError) {
      return reply.status(400).send({ message: err.message })
    }

    if (err instanceof NotAllowedError) {
      return reply.status(403).send({ message: err.message })
    }

    if (err instanceof ZodError) {
      return reply
        .status(400)
        .send({ message: 'Validation error', issues: err.format() })
    }

    console.error(err)

    return reply
      .status(500)
      .send({ message: `Internal Server Error, ${String(err)}` })
  }
}

export async function FetchAllMusicsController(
  _: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const FetchAllMusicsUseCase = makeFetchAllMusicsUseCase()

    const musics = await FetchAllMusicsUseCase.execute()

    return reply.status(200).send(musics)
  } catch (err: unknown) {
    console.error(err)
    return reply
      .status(500)
      .send({ message: `Internal Server Error, ${String(err)}` })
  }
}

export async function DeleteMusicController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const deleteParamsSchema = z.object({
      musicId: z.string(),
    })

    const { musicId } = deleteParamsSchema.parse(request.params)

    if (!musicId) {
      throw new ConversionError('musicId is missing')
    }

    const userId = request.userId
    if (!userId) {
      throw new NotAllowedError()
    }

    const deleteMusicUseCase = makeDeleteMusicUseCase()

    await deleteMusicUseCase.execute({
      musicId,
      userId,
    })

    return reply.status(204).send()
  } catch (err: unknown) {
    if (err instanceof ConversionError) {
      return reply.status(400).send({ message: err.message })
    }

    if (err instanceof NotAllowedError) {
      return reply.status(403).send({ message: err.message })
    }

    if (err instanceof ZodError) {
      return reply
        .status(400)
        .send({ message: 'Validation error', issues: err.format() })
    }

    console.error(err)

    return reply
      .status(500)
      .send({ message: `Internal Server Error, ${String(err)}` })
  }
}

// Connection-related controllers moved to user-music-controllers.ts
