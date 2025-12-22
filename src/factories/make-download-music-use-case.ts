import { PrismaMusicRepository } from '@/repositories/prisma/prisma-music-repository'
import { PrismaUserMusicRepository } from '@/repositories/prisma/prisma-user-music-repository'
import { PrismaUserRepository } from '@/repositories/prisma/prisma-user-repository'
import { DownloadUseCase } from '@/usecases/music/download-music-usecase'

export function makeDownloadMusicUseCase() {
  const userRepository = new PrismaUserRepository()
  const musicRepository = new PrismaMusicRepository()
  const userMusicRepository = new PrismaUserMusicRepository()
  const useCase = new DownloadUseCase(
    musicRepository,
    userRepository,
    userMusicRepository,
  )
  return useCase
}
