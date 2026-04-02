import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryMusicRepository } from '../../test/repo/in-memory-music-repository'
import { InMemoryUserRepository } from '../../test/repo/in-memory-user-repository'
import { InMemoryUserMusicRepository } from '../../test/repo/in-memory-user-music-repository'
import { CreateMusicByFileUseCase } from './create-music-by-file-usecase'
import { InvalidAttachmentError } from '@/errors/invalid-attachment-error'
import { UserNotFoundError } from '@/errors/user-not-found-error'

let musicRepository: InMemoryMusicRepository
let userRepository: InMemoryUserRepository
let userMusicRepository: InMemoryUserMusicRepository
let sut: CreateMusicByFileUseCase

describe('Create Music By File Use Case', () => {
  beforeEach(() => {
    musicRepository = new InMemoryMusicRepository()
    userRepository = new InMemoryUserRepository()
    userMusicRepository = new InMemoryUserMusicRepository()
    sut = new CreateMusicByFileUseCase(
      musicRepository,
      userRepository,
      userMusicRepository,
    )
  })

  it('should be able to create a music by file', async () => {
    const user = await userRepository.create({
      email: 'johndoe@example.com',
      password: 'password123',
    })

    const result = await sut.execute({
      url: 'https://cloudinary.com/music.mp3',
      fileName: 'music.mp3',
      userId: user.id!,
    })

    expect(result.musicId).toEqual(expect.any(String))
    expect(musicRepository.items).toHaveLength(1)
    expect(userMusicRepository.items).toHaveLength(1)
    expect(userMusicRepository.items[0].userId).toBe(user.id!)
  })

  it('should not be able to create a music without url', async () => {
    await expect(
      sut.execute({
        url: '',
        fileName: 'music.mp3',
        userId: 'user-1',
      }),
    ).rejects.toBeInstanceOf(InvalidAttachmentError)
  })

  it('should not be able to create a music without filename', async () => {
    await expect(
      sut.execute({
        url: 'https://cloudinary.com/music.mp3',
        fileName: '',
        userId: 'user-1',
      }),
    ).rejects.toBeInstanceOf(InvalidAttachmentError)
  })

  it('should not be able to create a music if user does not exist', async () => {
    await expect(
      sut.execute({
        url: 'https://cloudinary.com/music.mp3',
        fileName: 'music.mp3',
        userId: 'non-existent-user',
      }),
    ).rejects.toBeInstanceOf(UserNotFoundError)
  })
})
