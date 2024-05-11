import { RegisterPushTokenUseCase } from '../use-cases/tokens/registerPushTokenUseCase/registerPushTokenUseCase'
import { type registerPushTokenResponse } from '../types/tokens'
import { PrismaTokenRepository } from '../repositories/prismaTokenRepository'
import { type User } from '../types/auth'

export class TokensController {
  async registerPushToken (req: any, reply: any): Promise<registerPushTokenResponse> {
    const userId: User['id'] = req.body.data.userId
    const token: string = req.body.data.token
    const tokensRepository = new PrismaTokenRepository()
    const registerPushTokenUseCase = new RegisterPushTokenUseCase(tokensRepository)
    const response = await registerPushTokenUseCase.execute(token, userId)
    return reply.status(response.data.status).send(response)
  }
}
