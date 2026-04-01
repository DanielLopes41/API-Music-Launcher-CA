import { User } from '@/domain/entities/user'
import { CreateUserDTO } from '@/domain/dtos/create-user-dto'

export interface UserRepository {
  findByEmail(email: string): Promise<User | null>
  create(data: CreateUserDTO): Promise<User>
  findById(id: string): Promise<User | null>
}
