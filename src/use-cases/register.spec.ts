import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { compare } from 'bcryptjs'
import { describe, expect, it } from 'vitest'
import { UserAlreadyExistsError } from './errors/user-already-exists-error'
import { RegisterUseCase } from './register'

describe('Register Use Case', () => {
  it('should hash user password upon registration', async () => {
    // Arrange (Preparação)
    const UsersRepository = new InMemoryUsersRepository()
    const registerUseCase = new RegisterUseCase(UsersRepository)

    // Act (Ação)
    const { user } = await registerUseCase.execute({
      name: 'John Doe',
      email: 'johnsdoe@example.com',
      password: '12345678',
    })

    // Assert (Afirmação)
    expect(user.id).toEqual(expect.any(String))
  })

  it('should hash user password upon registration', async () => {
    const UsersRepository = new InMemoryUsersRepository()
    const registerUseCase = new RegisterUseCase(UsersRepository)

    const { user } = await registerUseCase.execute({
      name: 'John Doe',
      email: 'johnsdoe@example.com',
      password: '12345678',
    })

    const isPasswordCorrectlyHashed = await compare(
      '12345678',
      user.password_hash,
    )

    expect(isPasswordCorrectlyHashed).toBe(true)
  })

  it('should not be able to register with same email twice', async () => {
    const UsersRepository = new InMemoryUsersRepository()
    const registerUseCase = new RegisterUseCase(UsersRepository)
    const email = 'johnsdoe@example.com'

    await registerUseCase.execute({
      name: 'John Doe',
      email,
      password: '12345678',
    })

    expect(() =>
      registerUseCase.execute({
        name: 'John Doe',
        email,
        password: '12345678',
      }),
    ).rejects.toBeInstanceOf(UserAlreadyExistsError)
  })
})
