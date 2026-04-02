import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryMusicRepository } from '../../test/repo/in-memory-music-repository'
import { FetchAllMusicsUseCase } from './fetch-musics-usecase'

let musicRepository: InMemoryMusicRepository
let sut: FetchAllMusicsUseCase

describe('Fetch All Musics Use Case', () => {
  beforeEach(() => {
    musicRepository = new InMemoryMusicRepository()
    sut = new FetchAllMusicsUseCase(musicRepository)
  })

  it('should be able to fetch all musics', async () => {
    await musicRepository.create({
      title: 'Music 1',
      cloudinaryUrl: 'https://cloudinary.com/music1.mp3',
      thumbnailUrl: ''
    })

    await musicRepository.create({
      title: 'Music 2',
      cloudinaryUrl: 'https://cloudinary.com/music2.mp3',
      thumbnailUrl: ''
    })

    const musics = await sut.execute()

    expect(musics).toHaveLength(2)
    expect(musics[0].title).toBe('Music 1')
    expect(musics[1].title).toBe('Music 2')
  })

  it('should return an empty array if no musics exist', async () => {
    const musics = await sut.execute()
    expect(musics).toHaveLength(0)
  })
})
