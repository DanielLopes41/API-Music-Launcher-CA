import { PrismaMusicRepository } from '@/repositories/prisma/prisma-music-repository'
import { FetchAllMusicsUseCase } from '@/usecases/music/fetch-musics-usecase'

export function makeFetchAllMusicsUseCase() {
  const musicRepository = new PrismaMusicRepository()
  const useCase = new FetchAllMusicsUseCase(musicRepository)
  return useCase
}
