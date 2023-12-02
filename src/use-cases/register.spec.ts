import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { describe, it } from 'vitest'
import { RegisterUseCase } from './register'

describe('Register Use Case', () => {
  it('should hash user password upon registration', async () => {
    const prismaUsersRepository = new PrismaUsersRepository()
    const registerUseCase = new RegisterUseCase(prismaUsersRepository)

    const user = await registerUseCase.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '12345678',
    })
  })
})
