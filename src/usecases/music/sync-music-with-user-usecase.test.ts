import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryMusicRepository } from '../../test/repo/in-memory-music-repository'
import { InMemoryUserRepository } from '../../test/repo/in-memory-user-repository'
import { InMemoryUserMusicRepository } from '../../test/repo/in-memory-user-music-repository'
import { SyncMusicWithUserUseCase } from './sync-music-with-user-usecase'
import { NotAllowedError } from '@/errors/not-allowed-error'
import { MusicNotFoundError } from '@/errors/music-not-found-error'

let musicRepository: InMemoryMusicRepository
let userRepository: InMemoryUserRepository
let userMusicRepository: InMemoryUserMusicRepository
let sut: SyncMusicWithUserUseCase

describe('Sync Music With User Use Case', () => {
  beforeEach(() => {
    musicRepository = new InMemoryMusicRepository()
    userRepository = new InMemoryUserRepository()
    userMusicRepository = new InMemoryUserMusicRepository()
    sut = new SyncMusicWithUserUseCase(
      musicRepository,
      userRepository,
      userMusicRepository,
    )
  })

  it('should be able to sync a music with a user', async () => {
    const user = await userRepository.create({
      email: 'johndoe@example.com',
      password: 'password123',
    })

    const music = await musicRepository.create({
      title: 'Music 1',
      cloudinaryUrl: 'https://cloudinary.com/music1.mp3',
      thumbnailUrl: ''
    })

    const result = await sut.execute({
      musicId: music.id,
      userId: user.id!,
    })

    expect(result.message).toBe('success')
    expect(userMusicRepository.items).toHaveLength(1)
    expect(userMusicRepository.items[0].musicId).toBe(music.id)
    expect(userMusicRepository.items[0].userId).toBe(user.id!)
  })

  it('should not be able to sync if user does not exist', async () => {
    const music = await musicRepository.create({
      title: 'Music 1',
      cloudinaryUrl: 'https://cloudinary.com/music1.mp3',
      thumbnailUrl: ''
    })

    await expect(
      sut.execute({
        musicId: music.id,
        userId: 'non-existent-user',
      }),
    ).rejects.toBeInstanceOf(NotAllowedError)
  })

  it('should not be able to sync if music does not exist', async () => {
    const user = await userRepository.create({
      email: 'johndoe@example.com',
      password: 'password123',
    })

    await expect(
      sut.execute({
        musicId: 'non-existent-music',
        userId: user.id!,
      }),
    ).rejects.toBeInstanceOf(MusicNotFoundError)
  })
})
