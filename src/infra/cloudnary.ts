import { env } from '@/config/env'
import { v2 as cloudinary } from 'cloudinary'
import { Readable } from 'stream'

cloudinary.config({
  cloud_name: env.CLOUDINARY_CLOUD_NAME,
  api_key: env.CLOUDINARY_API_KEY,
  api_secret: env.CLOUDINARY_API_SECRET,
})

export async function uploadToCloudinary(buffer: Buffer) {
  return new Promise<{ url: string; fileName: string }>((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: 'musics',
        resource_type: 'auto', // Importante para áudio/vídeo
      },
      (error, result) => {
        if (error) return reject(error)
        if (!result) return reject(new Error('No result from Cloudinary'))

        resolve({
          url: result.secure_url,
          fileName: result.original_filename,
        })
      },
    )

    const stream = Readable.from(buffer)
    stream.pipe(uploadStream)
  })
}
