import { Prisma, User } from 'generated/prisma'
import { UserRepository } from '../user-repository'
import { prisma } from '@/config/prisma'
import { UserAlreadyExistsError } from '@/errors/invalid-credentials-error'

export class PrismaUserRepository implements UserRepository {
  async findById(id: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    })
    if (user) {
      return user
    }
    return null
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    })
    if (!user) {
      return null
    }
    return user
  }

  async create(data: Prisma.UserCreateInput) {
    const userWithSameEmail = await this.findByEmail(data.email)

    if (userWithSameEmail) {
      throw new UserAlreadyExistsError()
    }
    const user = await prisma.user.create({
      data: {
        email: data.email,
        password: data.password,
      },
    })
    return user
  }
}
