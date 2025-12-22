import { NotAllowedError } from '@/errors/not-allowed-error'
import { MusicNotFoundError } from '@/errors/music-not-found-error'
import { UserRepository } from '@/repositories/user-repository'
import { UserMusicRepository } from '@/repositories/user-music-repository'
import { MusicRepository } from '@/repositories/music-repository'

export class SyncMusicWithUserUseCase {
  constructor(
    private musicRepository: MusicRepository,
    private userRepository: UserRepository,
    private userMusicRepository: UserMusicRepository,
  ) {}

  async execute({ musicId, userId }: { musicId: string; userId: string }) {
    if (!userId || !musicId) {
      throw new NotAllowedError()
    }

    const user = await this.userRepository.findById(userId)
    if (!user) {
      throw new NotAllowedError()
    }

    const music = await this.musicRepository.findById(musicId)
    if (!music) {
      throw new MusicNotFoundError()
    }
    await this.userMusicRepository.create({ musicId, userId })

    return { message: 'success' }
  }
}
