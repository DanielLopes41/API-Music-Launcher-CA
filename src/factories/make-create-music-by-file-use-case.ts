import { PrismaMusicRepository } from '@/repositories/prisma/prisma-music-repository'
import { PrismaUserMusicRepository } from '@/repositories/prisma/prisma-user-music-repository'
import { PrismaUserRepository } from '@/repositories/prisma/prisma-user-repository'
import { CreateMusicByFileUseCase } from '@/usecases/music/create-music-by-file-usecase'

export function makeCreateMusicByFileUseCase() {
  const userRepository = new PrismaUserRepository()
  const musicRepository = new PrismaMusicRepository()
  const userMusicRepository = new PrismaUserMusicRepository()
  const useCase = new CreateMusicByFileUseCase(
    musicRepository,
    userRepository,
    userMusicRepository,
  )
  return useCase
}
