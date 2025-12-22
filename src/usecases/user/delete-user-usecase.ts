import { MusicRepository } from '@/repositories/music-repository'
import { z } from 'zod'

const deleteUserSchema = z.object({
  userId: z.string(),
  musicId: z.string(),
})

export interface DeleteUserProps {
  userId: string
  musicId: string
}

export class DeleteUserUseCase {
  constructor(private musicRepository: MusicRepository) {}

  async execute({ userId, musicId }: DeleteUserProps) {
    const validatedData = deleteUserSchema.parse({ userId, musicId })

    await this.musicRepository.delete({
      userId: validatedData.userId,
      musicId: validatedData.musicId,
    })
  }
}
