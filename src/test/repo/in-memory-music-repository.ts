import { MusicRepository } from '../../repositories/music-repository'
import { Music } from '@/domain/entities/music'
import { CreateMusicDTO } from '@/domain/dtos/create-music-dto'
import { randomUUID } from 'node:crypto'

export class InMemoryMusicRepository implements MusicRepository {
  public items: Music[] = []

  async fetchAllMusics(): Promise<Music[]> {
    return this.items
  }

  async fetchByUserId(userId: string): Promise<Music[]> {
    return []
  }

  async findById(id: string): Promise<Music | null> {
    const music = this.items.find((item) => item.id === id)
    return music || null
  }

  async findByCloudinaryUrl(url: string): Promise<Music | null> {
    const music = this.items.find((item) => item.cloudinaryUrl === url)
    return music || null
  }

  async create(data: CreateMusicDTO): Promise<Music> {
    const music: Music = {
      id: randomUUID(),
      title: data.title,
      cloudinaryUrl: data.cloudinaryUrl,
      thumbnailUrl: data.thumbnailUrl,
    }

    this.items.push(music)
    return music
  }

  async delete(params: { musicId: string; userId: string }): Promise<void> {
    const index = this.items.findIndex((item) => item.id === params.musicId)
    if (index >= 0) {
      this.items.splice(index, 1)
    }
  }
}
