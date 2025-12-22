import { FastifyInstance } from 'fastify'
import {
  CreateUserController,
  LoginController,
  RefreshTokenController,
} from '../controllers/auth-controller'

export function UserRoutes(app: FastifyInstance) {
  app.post('/user', CreateUserController)
  app.post('/sessions', LoginController)
  app.post('/auth/refresh', RefreshTokenController)
}
