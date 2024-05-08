import { type AuthRepository } from './interfaces/authRepository'
import type { RegisterCredentials, RegisterUserResponse, User } from '../types/auth'

export class InMemoryAuthRepository implements AuthRepository {
  public users: User[] = [
    { email: 'Abdel Djoudi', password: 'sdf', firstname: '', lastname: '', id: 1, createdAt: new Date(), updatedAt: new Date() }
  ]

  async register (credentials: RegisterCredentials): Promise<RegisterUserResponse> {
    this.users.push({
      firstname: '',
      lastname: '',
      ...credentials,
      createdAt: new Date(),
      updatedAt: new Date(),
      id: 1
    })
    return await new Promise<RegisterUserResponse>((resolve) => {
      resolve({
        data: {
          status: 201
        }
      })
    })
  }
}
