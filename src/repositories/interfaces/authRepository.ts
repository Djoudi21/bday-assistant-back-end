import { type RegisterCredentials, type RegisterUserResponse } from '../../types/auth'

export interface AuthRepository {
  register: (credentials: RegisterCredentials) => Promise<RegisterUserResponse>
  getUserIdByAuthToolUserId: (authToolUserId: string) => Promise<number | null>
}
