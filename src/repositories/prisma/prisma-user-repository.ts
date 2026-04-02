import { prisma } from '@/config/prisma'
import { UserRepository } from '../user-repository'
import { AlreadyExistsUserError } from '../../errors/already-exists-user-error'
import { User } from '@/domain/entities/user'
import { CreateUserDTO } from '@/domain/dtos/create-user-dto'

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

  async create(data: CreateUserDTO): Promise<User> {
    const userWithSameEmail = await this.findByEmail(data.email)

    if (userWithSameEmail) {
      throw new AlreadyExistsUserError()
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
