import { InvalidCredentialsError } from '@/errors/user-alredy-exists-error'
import { UserRepository } from '../../repositories/user-repository'
import bcrypt from 'bcrypt'

export interface CreateUserProps {
  email: string
  password: string
}

export class LoginUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({ email, password }: CreateUserProps) {
    const user = await this.userRepository.findByEmail(email)
    if (!user || !user.password) {
      throw new InvalidCredentialsError()
    }
    const isCorrectPassword = await bcrypt.compare(password, user.password)
    if (user.email !== email || !isCorrectPassword) {
      throw new InvalidCredentialsError()
    }
    return { user }
  }
}
