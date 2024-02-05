import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { hash } from 'bcryptjs'
import { beforeEach, describe, expect, it } from 'vitest'
import { AuthenticateUseCase } from './authenticate'
import { InvalidCredentialsError } from './errors/invalid-credentials-error'

// istanciando globalmente
let UsersRepository: InMemoryUsersRepository
let sut: AuthenticateUseCase

describe('Authenticate Use Case', () => {
  // Será instanciado antes de cada teste
  beforeEach(() => {
    UsersRepository = new InMemoryUsersRepository()
    sut = new AuthenticateUseCase(UsersRepository)
  })
  it('should be able to authenticate', async () => {
    await UsersRepository.create({
      name: 'John Doe',
      email: 'johnsdoe@example.com',
      password_hash: await hash('12345678', 8),
    })

    const { user } = await sut.execute({
      email: 'johnsdoe@example.com',
      password: '12345678',
    })

    expect(user.id).toEqual(expect.any(String))
  })

  it('should not be able to authenticate with wrong email', async () => {
    await expect(() =>
      sut.execute({
        email: 'johnsdoe@example.com',
        password: '12345678',
      }),
    ).rejects.toBeInstanceOf(InvalidCredentialsError)
  })

  it('should not be able to authenticate with wrong password', async () => {
    await UsersRepository.create({
      name: 'John Doe',
      email: 'johnsdoe@example.com',
      password_hash: await hash('12345678', 8),
    })

    await expect(() =>
      sut.execute({
        email: 'johnsdoe@example.com',
        password: '12341234',
      }),
    ).rejects.toBeInstanceOf(InvalidCredentialsError)
  })
})
