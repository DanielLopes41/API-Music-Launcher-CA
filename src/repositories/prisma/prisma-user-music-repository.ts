import { Prisma } from 'generated/prisma'
import { prisma } from '@/config/prisma'
import { UserMusicRepository } from '../user-music-repository'

export class PrismaUserMusicRepository implements UserMusicRepository {
  async delete({
    musicId,
    userId,
  }: {
    musicId: string
    userId: string
  }): Promise<void> {
    try {
      await prisma.userMusic.delete({
        where: {
          userId_musicId: {
            userId,
            musicId,
          },
        },
      })
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new Error('User music relation not found.')
        }
      }
      throw error
    }
  }

  async create(data: Prisma.UserMusicUncheckedCreateInput) {
    try {
      const musicRelation = await prisma.userMusic.create({
        data: {
          userId: data.userId,
          musicId: data.musicId,
        },
      })

      return musicRelation
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2003') {
          throw new Error('User or Music not found.')
        }
      }
      throw error
    }
  }
}
