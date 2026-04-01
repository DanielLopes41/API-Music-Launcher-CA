import 'dotenv/config'
import { z } from 'zod'

export const envSchema = z.object({
  DATABASE_URL: z.url(),
  JWT_SECRET: z.string(),
  COOKIE_SECRET: z.string(),
  PORT: z.coerce.number().optional().default(3333),
  CLOUDINARY_CLOUD_NAME: z.string(),
  CLOUDINARY_API_KEY: z.string(),
  CLOUDINARY_API_SECRET: z.string(),
})

const isTest = process.env.NODE_ENV === 'test'

const testEnvDefaults = {
  DATABASE_URL: 'postgresql://test:test@localhost:5432/test',
  JWT_SECRET: 'test-secret',
  COOKIE_SECRET: 'test-cookie-secret',
  CLOUDINARY_CLOUD_NAME: 'test',
  CLOUDINARY_API_KEY: 'test',
  CLOUDINARY_API_SECRET: 'test',
}

const envToParse = isTest ? { ...testEnvDefaults, ...process.env } : process.env

export const parsedEnv = envSchema.safeParse(envToParse)

if (!parsedEnv.success) {
  console.error(parsedEnv.error.format())
  throw new Error('Invalid environment variables')
}

export const env = parsedEnv.data
