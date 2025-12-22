import { InvalidAttachmentError } from '@/errors/invalid-attachment-error'
import { NotAllowedError } from '@/errors/not-allowed-error'
import { MusicRepository } from '@/repositories/music-repository'
import { UserMusicRepository } from '@/repositories/user-music-repository'
import { UserRepository } from '@/repositories/user-repository'

export class DeleteMusicUseCase {
  constructor(
    private musicRepository: MusicRepository,
    private userRepository: UserRepository,
    private userMusicRepository: UserMusicRepository,
  ) {}

  async execute({ musicId, userId }: { musicId: string; userId: string }) {
    if (!musicId) {
      throw new InvalidAttachmentError('O ID da música é obrigatório.')
    }

    const user = await this.userRepository.findById(userId)
    if (!user) {
      throw new NotAllowedError()
    }

    await this.userMusicRepository.delete({
      musicId,
      userId,
    })

    await this.musicRepository.delete({
      musicId,
      userId,
    })

    return {
      message: 'success',
    }
  }
}
