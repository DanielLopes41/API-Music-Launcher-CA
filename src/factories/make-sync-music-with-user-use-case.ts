import { PrismaUserMusicRepository } from '@/repositories/prisma/prisma-user-music-repository'
import { PrismaMusicRepository } from '@/repositories/prisma/prisma-music-repository'
import { PrismaUserRepository } from '@/repositories/prisma/prisma-user-repository'
import { SyncMusicWithUserUseCase } from '@/usecases/music/sync-music-with-user-usecase'

export function makeSyncMusicWithUserUseCase() {
  const userRepository = new PrismaUserRepository()
  const userMusicRepository = new PrismaUserMusicRepository()
  const musicRepository = new PrismaMusicRepository()

  const useCase = new SyncMusicWithUserUseCase(
    musicRepository,
    userRepository,
    userMusicRepository,
  )
  return useCase
}
