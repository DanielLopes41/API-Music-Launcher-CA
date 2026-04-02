import { beforeEach, describe, expect, it, vi } from 'vitest'
import { InMemoryMusicRepository } from '../../test/repo/in-memory-music-repository'
import { InMemoryUserRepository } from '../../test/repo/in-memory-user-repository'
import { InMemoryUserMusicRepository } from '../../test/repo/in-memory-user-music-repository'
import { DownloadUseCase } from './download-music-usecase'
import { UserNotFoundError } from '@/errors/user-not-found-error'
import { ConversionError } from '@/errors/conversion-error'
import axios from 'axios'

vi.mock('axios')

let musicRepository: InMemoryMusicRepository
let userRepository: InMemoryUserRepository
let userMusicRepository: InMemoryUserMusicRepository
let sut: DownloadUseCase

describe('Download Music Use Case', () => {
  beforeEach(() => {
    musicRepository = new InMemoryMusicRepository()
    userRepository = new InMemoryUserRepository()
    userMusicRepository = new InMemoryUserMusicRepository()
    sut = new DownloadUseCase(
      musicRepository,
      userRepository,
      userMusicRepository,
    )
    vi.clearAllMocks()
  })

  it('should be able to download and sync a music', async () => {
    const user = await userRepository.create({
      email: 'johndoe@example.com',
      password: 'password123',
    })

    const mockedAxios = vi.mocked(axios)
    mockedAxios.get.mockResolvedValueOnce({
      data: {
        data: {
          play: 'https://video-url.com/music.mp4',
        },
      },
    })

    const result = await sut.execute({
      url: 'https://tiktok.com/video/123',
      userId: user.id!,
    })

    expect(result.musicId).toEqual(expect.any(String))
    expect(result.cloudinaryUrl).toBe('https://video-url.com/music.mp4')
    expect(musicRepository.items).toHaveLength(1)
    expect(userMusicRepository.items).toHaveLength(1)
  })

  it('should not be able to download if conversion fails', async () => {
    const user = await userRepository.create({
      email: 'johndoe@example.com',
      password: 'password123',
    })

    const mockedAxios = vi.mocked(axios)
    mockedAxios.get.mockResolvedValueOnce({
      data: {
        data: {
          play: null,
        },
      },
    })

    await expect(
      sut.execute({
        url: 'https://tiktok.com/video/123',
        userId: user.id!,
      }),
    ).rejects.toBeInstanceOf(ConversionError)
  })

  it('should not be able to download if user does not exist', async () => {
    await expect(
      sut.execute({
        url: 'https://tiktok.com/video/123',
        userId: 'non-existent-user',
      }),
    ).rejects.toBeInstanceOf(UserNotFoundError)
  })

  it('should reuse existing music if same cloudinaryUrl is found', async () => {
    const user = await userRepository.create({
      email: 'johndoe@example.com',
      password: 'password123',
    })

    const existingMusic = await musicRepository.create({
      title: 'Existing Music',
      cloudinaryUrl: 'https://video-url.com/music.mp4',
      thumbnailUrl: ''
    })

    const mockedAxios = vi.mocked(axios)
    mockedAxios.get.mockResolvedValueOnce({
      data: {
        data: {
          play: 'https://video-url.com/music.mp4',
        },
      },
    })

    const result = await sut.execute({
      url: 'https://tiktok.com/video/123',
      userId: user.id!,
    })

    expect(result.musicId).toBe(existingMusic.id)
    expect(musicRepository.items).toHaveLength(1)
    expect(userMusicRepository.items).toHaveLength(1)
  })
})
