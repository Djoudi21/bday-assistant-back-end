import { type TokensRepository } from '../../../repositories/interfaces/tokensRepository'
import type { RegisterUserResponse, User } from '../../../types/auth'

export class RegisterPushTokenUseCase {
  private readonly tokensRepository: TokensRepository

  constructor (tokensRepository: TokensRepository) {
    this.tokensRepository = tokensRepository
  }

  async execute (token: string, userId: User['id']): Promise<RegisterUserResponse> {
    return await this.tokensRepository.registerPushToken(token, userId)
  }
}
