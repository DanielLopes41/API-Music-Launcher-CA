import { ConversionError } from '@/errors/conversion-error'
import { UserNotFoundError } from '@/errors/user-not-found-error'
import { MusicRepository } from '@/repositories/music-repository'
import { UserMusicRepository } from '@/repositories/user-music-repository'
import { UserRepository } from '@/repositories/user-repository'
import axios from 'axios'

export class DownloadUseCase {
  constructor(
    private musicRepository: MusicRepository,
    private userRepository: UserRepository,
    private userMusicRepository: UserMusicRepository,
  ) {}

  async execute({ url, userId }: { url: string; userId: string }) {
    const user = await this.userRepository.findById(userId)
    if (!user) {
      throw new UserNotFoundError()
    }

    const cleanedUrl = url.replace(/\?.*$/, '')

    const response = await axios.get('https://www.tikwm.com/api/', {
      params: { url: cleanedUrl },
    })

    const videoUrl = response?.data?.data?.play
    if (!videoUrl) {
      throw new ConversionError()
    }

    let music = await this.musicRepository.findByCloudinaryUrl(videoUrl)

    if (!music) {
      music = await this.musicRepository.create({
        title: `music_${Date.now()}`,
        // Temporary while I don't find a YouTube API
        cloudinaryUrl: videoUrl,
        thumbnailUrl:
          'https://media.istockphoto.com/id/1215540461/pt/vetorial/3d-headphones-on-sound-wave-background-colorful-abstract-visualization-of-digital-sound.jpg?s=612x612',
      })
    }

    await this.userMusicRepository.create({
      userId: user.id,
      musicId: music.id,
    })

    return {
      musicId: music.id,
      cloudinaryUrl: music.cloudinaryUrl,
      thumbnailUrl: music.thumbnailUrl,
    }
  }
}
