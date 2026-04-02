import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryMusicRepository } from '../../test/repo/in-memory-music-repository'
import { InMemoryUserRepository } from '../../test/repo/in-memory-user-repository'
import { InMemoryUserMusicRepository } from '../../test/repo/in-memory-user-music-repository'
import { DeleteMusicUseCase } from './delete-music-usecase'
import { NotAllowedError } from '@/errors/not-allowed-error'
import { InvalidAttachmentError } from '@/errors/invalid-attachment-error'

let musicRepository: InMemoryMusicRepository
let userRepository: InMemoryUserRepository
let userMusicRepository: InMemoryUserMusicRepository
let sut: DeleteMusicUseCase

describe('Delete Music Use Case', () => {
  beforeEach(() => {
    musicRepository = new InMemoryMusicRepository()
    userRepository = new InMemoryUserRepository()
    userMusicRepository = new InMemoryUserMusicRepository()
    sut = new DeleteMusicUseCase(
      musicRepository,
      userRepository,
      userMusicRepository,
    )
  })

  it('should be able to delete a music', async () => {
    const user = await userRepository.create({
      email: 'johndoe@example.com',
      password: 'password123',
    })

    const music = await musicRepository.create({
      title: 'music.mp3',
      cloudinaryUrl: 'https://cloudinary.com/music.mp3',
      thumbnailUrl: ''
    })

    await userMusicRepository.create({
      userId: user.id!,
      musicId: music.id
    })

    const result = await sut.execute({
      musicId: music.id,
      userId: user.id!,
    })

    expect(result.message).toBe('success')
    expect(musicRepository.items).toHaveLength(0)
    expect(userMusicRepository.items).toHaveLength(0)
  })

  it('should not be able to delete a music without musicId', async () => {
    await expect(
      sut.execute({
        musicId: '',
        userId: 'user-1',
      }),
    ).rejects.toBeInstanceOf(InvalidAttachmentError)
  })

  it('should not be able to delete a music if user does not exist', async () => {
    await expect(
      sut.execute({
        musicId: 'music-1',
        userId: 'non-existent-user',
      }),
    ).rejects.toBeInstanceOf(NotAllowedError)
  })
})
