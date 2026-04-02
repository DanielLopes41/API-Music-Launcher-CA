import { UserMusicRepository } from '../../repositories/user-music-repository'
import { UserMusic } from '@/domain/entities/user-music'

export class InMemoryUserMusicRepository implements UserMusicRepository {
  public items: UserMusic[] = []

  async create(data: { userId: string; musicId: string }): Promise<UserMusic> {
    const userMusic: UserMusic = {
      userId: data.userId,
      musicId: data.musicId,
      addedAt: new Date(),
    }

    this.items.push(userMusic)
    return userMusic
  }

  async delete(params: { musicId: string; userId: string }): Promise<void> {
    const index = this.items.findIndex(
      (item) => item.userId === params.userId && item.musicId === params.musicId,
    )
    if (index >= 0) {
      this.items.splice(index, 1)
    }
  }
}
