import Fastify from 'fastify'
import dotenv from 'dotenv'

import fastifyCors from '@fastify/cors'
import fastifyMultipart from '@fastify/multipart'
import fastifyJwt from '@fastify/jwt'
import fastifyCookie from '@fastify/cookie'

import { env } from './config/env'
import { UserRoutes } from './routes/user'
import { MusicRoutes } from './routes/music'
dotenv.config()

export const app = Fastify({ logger: true })

export const globalSaltRounds = 8

app.register(fastifyCors, {
  origin: '*',
  credentials: true,
})
if (!env.JWT_SECRET) {
  throw new Error('JWT_SECRET environment variable is not defined')
}
app.register(fastifyCookie, {
  secret: env.COOKIE_SECRET,
  hook: 'onRequest',
})

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
})
app.register(fastifyMultipart, {
  limits: {
    fileSize: 200 * 1024 * 1024, // 200MB
  },
})

app.setErrorHandler((error, _, reply) => {
  if (reply.statusCode >= 400) {
    reply.send(error)
    return
  }
  reply.status(500).send({ message: 'Internal server error' })
})
const routes = [UserRoutes, MusicRoutes]
routes.forEach((route) => {
  app.register(route)
})
