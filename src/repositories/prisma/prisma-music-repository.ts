import { prisma } from '@/config/prisma'
import { MusicRepository } from '../music-repository'
import { Music } from '@/domain/entities/music'
import { CreateMusicDTO } from '@/domain/dtos/create-music-dto'

export class PrismaMusicRepository implements MusicRepository {
  async findById(id: string): Promise<Music | null> {
    const music = await prisma.music.findUnique({
      where: { id },
    })
    if (!music) return null
    return music
  }

  async fetchByUserId(userId: string): Promise<Music[]> {
    const musics = await prisma.music.findMany({
      where: {
        users: {
          some: {
            userId,
          },
        },
      },
    })

    return musics
  }

  async findByCloudinaryUrl(url: string): Promise<Music | null> {
    const music = await prisma.music.findFirst({
      where: {
        cloudinaryUrl: url,
      },
    })
    if (!music) {
      return null
    }
    return music
  }

  async fetchAllMusics(): Promise<Music[]> {
    const musics = await prisma.music.findMany()

    return musics
  }

  async create(data: CreateMusicDTO): Promise<Music> {
    const music = await prisma.music.create({
      data: {
        title: data.title,
        thumbnailUrl: data.thumbnailUrl,
        cloudinaryUrl: data.cloudinaryUrl,
      },
    })

    return music
  }

  async delete(params: { musicId: string; userId: string }): Promise<void> {
    const { musicId } = params

    await prisma.music.delete({
      where: {
        id: musicId,
      },
    })
  }
}
