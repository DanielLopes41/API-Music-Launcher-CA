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

export const parsedEnv = envSchema.safeParse(process.env)

if (!parsedEnv.success) {
  console.error(parsedEnv.error.format())
  throw new Error('Invalid environment variables')
}

export const env = parsedEnv.data
