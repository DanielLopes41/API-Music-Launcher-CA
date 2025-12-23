import multer, { Multer } from 'multer'
import type { Request } from 'express'
import path from 'path'
import os from 'os'

interface MulterFile {
  originalname: string
}

const upload: Multer = multer({
  storage: multer.diskStorage({
    destination: (
      req: Request,
      file: MulterFile,
      cb: (error: Error | null, destination: string) => void,
    ) => {
      cb(null, os.tmpdir())
    },
    filename: (
      req: Request,
      file: MulterFile,
      cb: (error: Error | null, filename: string) => void,
    ) => {
      const ext = path.extname(file.originalname)
      const name = path.basename(file.originalname, ext)
      cb(null, `${name}-${Date.now()}${ext}`)
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
})

export default upload
