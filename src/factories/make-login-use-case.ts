import { PrismaUserRepository } from '@/repositories/prisma/prisma-user-repository'
import { LoginUseCase } from '@/usecases/user/login-usecase'

export function makeLoginUseCase() {
  const userRepository = new PrismaUserRepository()
  const useCase = new LoginUseCase(userRepository)
  return useCase
}
