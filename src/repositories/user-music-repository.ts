import { Prisma, UserMusic } from '../../generated/prisma'

export interface UserMusicRepository {
  create(data: Prisma.UserMusicUncheckedCreateInput): Promise<UserMusic>
  delete({
    musicId,
    userId,
  }: {
    musicId: string
    userId: string
  }): Promise<void>
}
