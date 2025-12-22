import { MusicRepository } from '@/repositories/music-repository'

export class FetchAllMusicsUseCase {
  constructor(private musicRepository: MusicRepository) {}

  async execute() {
    const musics = await this.musicRepository.fetchAllMusics()

    return musics
  }
}
