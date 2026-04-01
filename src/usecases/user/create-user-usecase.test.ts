import { InMemoryUserRepository } from "../../test/repo/in-memory-user-repository";
import { CreateUserUseCase } from "./create-user-usecase";
import { beforeEach, describe, it, expect } from "vitest";
import { vi } from 'vitest'

vi.mock('generated/prisma', () => {
    return {
        PrismaClient: class { }
    }
})

let usersRepository: InMemoryUserRepository
let sut: CreateUserUseCase

describe('Create user Use Case', () => {
    beforeEach(() => {
        usersRepository = new InMemoryUserRepository()
        sut = new CreateUserUseCase(usersRepository)
    })

    it('should be able to create a user', async () => {
        const user = await sut.execute({
            email: 'test@gmail.com',
            password: 'password123'
        })

        expect(user.id).toEqual(expect.any(String))
        expect(user.email).toBe('test@gmail.com')
        // Password shouldn't be plain text
        expect(user.password).not.toBe('password123')
    })

    it('should not be able to create a user with same email', async () => {
        await sut.execute({
            email: 'test@gmail.com',
            password: 'password123'
        })

        await expect(
            sut.execute({
                email: 'test@gmail.com',
                password: 'password123'
            })
        ).rejects.toBeInstanceOf(Error)
    })
})