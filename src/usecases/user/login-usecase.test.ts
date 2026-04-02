import { InMemoryUserRepository } from "../../test/repo/in-memory-user-repository";
import { LoginUseCase } from "./login-usecase";
import { beforeEach, describe, it, expect } from "vitest";
import { vi } from 'vitest'
import bcrypt from 'bcrypt'
import { InvalidCredentialsError } from '@/errors/invalid-credentials-error'

vi.mock('generated/prisma', () => {
  return {
    PrismaClient: class {} 
  }
})

let usersRepository: InMemoryUserRepository
let sut: LoginUseCase

describe('Login Use Case', () => {
    beforeEach(() => {
        usersRepository = new InMemoryUserRepository()
        sut = new LoginUseCase(usersRepository)
    })
  
    it('should be able to login with valid credentials', async () => {
        const passwordHash = await bcrypt.hash('password123', 6)
        
        await usersRepository.create({
            email: 'test@gmail.com',
            password: passwordHash
        })

        const { user } = await sut.execute({
            email: 'test@gmail.com',
            password: 'password123'
        })

        expect(user.id).toEqual(expect.any(String))
        expect(user.email).toBe('test@gmail.com')
    })
    
    it('should not be able to login with wrong email', async () => {
        const passwordHash = await bcrypt.hash('password123', 6)
        
        await usersRepository.create({
            email: 'test@gmail.com',
            password: passwordHash
        })

        await expect(sut.execute({
            email: 'wrong@gmail.com',
            password: 'password123'
        })).rejects.toBeInstanceOf(InvalidCredentialsError)
    })

    it('should not be able to login with wrong password', async () => {
        const passwordHash = await bcrypt.hash('password123', 6)
        
        await usersRepository.create({
            email: 'test@gmail.com',
            password: passwordHash
        })

        await expect(sut.execute({
            email: 'test@gmail.com',
            password: 'wrongpassword'
        })).rejects.toBeInstanceOf(InvalidCredentialsError)
    })
})
