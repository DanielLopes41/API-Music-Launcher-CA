import { InvalidAttachmentError } from '@/errors/invalid-attachment-error'
import { UserNotFoundError } from '@/errors/user-not-found-error'
import { MusicRepository } from '@/repositories/music-repository'
import { UserMusicRepository } from '@/repositories/user-music-repository'
import { UserRepository } from '@/repositories/user-repository'

interface CreateMusicRequest {
  url: string
  userId: string
  fileName: string
}

export class CreateMusicByFileUseCase {
  constructor(
    private musicRepository: MusicRepository,
    private userRepository: UserRepository,
    private userMusicRepository: UserMusicRepository,
  ) {}

  async execute({ url, userId, fileName }: CreateMusicRequest) {
    if (!url || !url.trim()) {
      throw new InvalidAttachmentError(
        'A URL do arquivo de música é obrigatória.',
      )
    }

    if (!fileName || !fileName.trim()) {
      throw new InvalidAttachmentError('O nome do arquivo é obrigatório.')
    }

    const user = await this.userRepository.findById(userId)
    if (!user) {
      throw new UserNotFoundError()
    }

    const music = await this.musicRepository.create({
      title: fileName,
      cloudinaryUrl: url,
      thumbnailUrl:
        'https://media.istockphoto.com/id/1215540461/pt/vetorial/3d-headphones-on-sound-wave-background-colorful-abstract-visualization-of-digital-sound.jpg?s=612x612',
    })

    try {
      await this.userMusicRepository.create({
        musicId: music.id,
        userId,
      })
    } catch (error) {
      await this.musicRepository.delete({ musicId: music.id, userId })
      throw error
    }

    return {
      musicId: music.id,
      cloudinaryUrl: music.cloudinaryUrl,
      thumbnailUrl: music.thumbnailUrl,
    }
  }
}
