import { FastifyInstance } from 'fastify'
import { RefreshTokenController } from '../controllers/auth-controller'
import { loginRequired } from '@/middlewares/loginRequired'
import {
  DownloadMusicController,
  FetchAllMusicsController,
  UploadMusicController,
  DeleteMusicController,
} from '@/controllers/music-controllers'
import {
  FetchUserMusicsController,
  SyncMusicWithUserController,
} from '@/controllers/user-music-controllers'

export function MusicRoutes(app: FastifyInstance) {
  app.post(
    '/music/download',
    { preHandler: [loginRequired] },
    DownloadMusicController,
  )
  app.post(
    '/music/upload',
    { preHandler: [loginRequired] },
    UploadMusicController,
  )

  app.delete(
    '/music/:musicId',
    { preHandler: [loginRequired] },
    DeleteMusicController,
  )

  app.get(
    '/music/me',
    { preHandler: [loginRequired] },
    FetchUserMusicsController,
  )

  app.put(
    '/music/:musicId/sync',
    { preHandler: [loginRequired] },
    SyncMusicWithUserController,
  )

  app.put(
    '/syncwithuser',
    { preHandler: [loginRequired] },
    RefreshTokenController,
  )

  app.get('/music', FetchAllMusicsController)
}
