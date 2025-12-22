import { PrismaUserRepository } from '@/repositories/prisma/prisma-user-repository'
import { CreateUserUseCase } from '@/usecases/user/create-user-usecase'

export function makeCreateUserUseCase() {
  const userRepository = new PrismaUserRepository()
  const useCase = new CreateUserUseCase(userRepository)
  return useCase
}
