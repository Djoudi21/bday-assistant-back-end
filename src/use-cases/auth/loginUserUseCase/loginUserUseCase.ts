import type { AuthRepository } from '../../../repositories/interfaces/authRepository'
import { type LoginCredentials, type LoginUserResponse } from '../../../types/auth'

export class LoginUserUseCase {
  authRepository: AuthRepository

  constructor (authRepository: AuthRepository) {
    this.authRepository = authRepository
  }

  async execute (credentials: LoginCredentials): Promise<LoginUserResponse> {
    return await this.authRepository.login(credentials)
  }
}
