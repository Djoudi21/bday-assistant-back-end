import { type GetPushTokenResponse, type registerPushTokenResponse } from '../../types/tokens'
import { type User } from '../../types/auth'

export interface TokensRepository {
  getPushToken: () => Promise<GetPushTokenResponse>
  registerPushToken: (token: string, userId: User['id']) => Promise<registerPushTokenResponse>
}
