import { NotAllowedError } from '@/errors/not-allowed-error'
import { MusicRepository } from '@/repositories/music-repository'
import { UserRepository } from '@/repositories/user-repository'

export class FetchUserMusicsUseCase {
  constructor(
    private musicRepository: MusicRepository,
    private userRepository: UserRepository,
  ) {}

  async execute({ userId }: { userId: string }) {
    if (!userId) {
      throw new NotAllowedError()
    }

    const user = await this.userRepository.findById(userId)
    if (!user) {
      throw new NotAllowedError()
    }

    const musics = await this.musicRepository.fetchByUserId(userId)
    return musics
  }
}
