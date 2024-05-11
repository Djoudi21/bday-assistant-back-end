import { type AuthRepository } from '../../../repositories/interfaces/authRepository'
import { type RegisterCredentials, type RegisterUserResponse } from '../../../types/auth'

export class RegisterUseCase {
  authRepository: AuthRepository

  constructor (authRepository: AuthRepository) {
    this.authRepository = authRepository
  }

  async execute (credentials: RegisterCredentials): Promise<RegisterUserResponse> {
    return await this.authRepository.register(credentials)
  }
}
