// src/@types/fastify-jwt.d.ts
import '@fastify/jwt'
declare module 'fastify' {
  interface FastifyRequest {
    userId?: string
  }
}
