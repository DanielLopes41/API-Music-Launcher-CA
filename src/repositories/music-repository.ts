import { Music } from '@/domain/entities/music'
import { CreateMusicDTO } from '@/domain/dtos/create-music-dto'

export interface MusicRepository {
  fetchAllMusics(): Promise<Music[]>
  fetchByUserId(userId: string): Promise<Music[]>
  findById(id: string): Promise<Music | null>
  findByCloudinaryUrl(url: string): Promise<Music | null>
  create(data: CreateMusicDTO): Promise<Music>
  delete(params: { musicId: string; userId: string }): Promise<void>
}
