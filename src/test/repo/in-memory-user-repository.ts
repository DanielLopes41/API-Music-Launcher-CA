import { UserRepository } from '@/repositories/user-repository'
import { User } from '@/domain/entities/user'
import { randomUUID } from 'node:crypto'
import { CreateUserDTO } from '@/domain/dtos/create-user-dto'

export class InMemoryUserRepository implements UserRepository {
  public users: User[] = []

  async findByEmail(email: string) {
    const user = this.users.find((user) => user.email === email)
    return user || null
  }

  async findById(id: string) {
    const user = this.users.find((user) => user.id === id)
    return user || null
  }

  async create(data: CreateUserDTO) {
    const user : User = {
        id:randomUUID(),
        email: data.email,
        password: data.password
    }
    this.users.push(user)
    return user
}
}