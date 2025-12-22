import { Prisma, Music } from '../../generated/prisma'

export interface MusicRepository {
  fetchAllMusics(): Promise<Music[]>
  fetchByUserId(userId: string): Promise<Music[]>

  findById(id: string): Promise<Music | null>
  findByCloudinaryUrl(url: string): Promise<Music | null>

  create(data: Prisma.MusicCreateInput): Promise<Music>

  delete(params: { musicId: string; userId: string }): Promise<void>
}
