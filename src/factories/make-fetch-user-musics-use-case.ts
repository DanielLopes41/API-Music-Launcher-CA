import { PrismaMusicRepository } from '@/repositories/prisma/prisma-music-repository'
import { PrismaUserRepository } from '@/repositories/prisma/prisma-user-repository'
import { FetchUserMusicsUseCase } from '@/usecases/fetch-user-musics.usecase'

export function makeFetchUserMusicsUseCase() {
  const userRepository = new PrismaUserRepository()
  const musicRepository = new PrismaMusicRepository()

  const useCase = new FetchUserMusicsUseCase(musicRepository, userRepository)
  return useCase
}
