import { PrismaMusicRepository } from '@/repositories/prisma/prisma-music-repository'
import { PrismaUserMusicRepository } from '@/repositories/prisma/prisma-user-music-repository'
import { PrismaUserRepository } from '@/repositories/prisma/prisma-user-repository'
import { DeleteMusicUseCase } from '@/usecases/music/delete-music-usecase'

export function makeDeleteMusicUseCase() {
  const userRepository = new PrismaUserRepository()
  const musicRepository = new PrismaMusicRepository()
  const userMusicRepository = new PrismaUserMusicRepository()
  const useCase = new DeleteMusicUseCase(
    musicRepository,
    userRepository,
    userMusicRepository,
  )
  return useCase
}
