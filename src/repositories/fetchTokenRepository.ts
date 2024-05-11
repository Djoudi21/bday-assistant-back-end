import { type TokensRepository } from './interfaces/tokensRepository'
import { type GetPushTokenResponse, type registerPushTokenResponse } from '../types/tokens'
import { type User } from '../types/auth'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export class FetchTokenRepository implements TokensRepository {
  async getPushToken (): Promise<GetPushTokenResponse> {
    return {
      data: {
        status: 200,
        token: {
          id: 1,
          userId: 1,
          token: 'ExponentPushToken[gWqVpRGOX8Hp-oVhDI3W8s]',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      }
    }
  }

  async registerPushToken (token: string, userId: User['id']): Promise<registerPushTokenResponse> {
    const createdToken = await prisma.token.create({
      data: {
        token,
        userId
      }
    })

    if (createdToken === null || createdToken === undefined) {
      return {
        data: {
          status: 500
        }
      }
    }

    return {
      data: {
        status: 201
      }
    }
  }
}
