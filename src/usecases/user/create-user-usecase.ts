import { UserRepository } from '../../repositories/user-repository'
import { hash } from 'bcrypt'
import { globalSaltRounds } from '../../app'

interface CreateUserProps {
  email: string
  password: string
}

export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({ email, password }: CreateUserProps) {
    const existingUser = await this.userRepository.findByEmail(email)
    if (existingUser) {
      throw new Error('User already exists')
    }

    const passwordHash = await hash(password, globalSaltRounds)

    const user = await this.userRepository.create({
      email,
      password: passwordHash,
    })

    return user
  }
}
