import { UserMusic } from '@/domain/entities/user-music'

export interface UserMusicRepository {
  create(data: { userId: string; musicId: string }): Promise<UserMusic>
  delete(params: { musicId: string; userId: string }): Promise<void>
}
