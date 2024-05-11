import { type AuthRepository } from './interfaces/authRepository'
import type {
  GetUserIdByAuthToolUserIdResponse,
  LoginCredentials,
  LoginUserResponse,
  RegisterCredentials,
  RegisterUserResponse,
  User, UserWithoutPassword
} from '../types/auth'

export class InMemoryAuthRepository implements AuthRepository {
  public users: User[] = [
    {
      email: 'Abdel Djoudi',
      password: 'sdf',
      firstName: 'qs',
      lastName: 'sdf',
      id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
      authToolUserId: ''
    }
  ]

  async register (credentials: RegisterCredentials): Promise<RegisterUserResponse> {
    this.users.push({
      ...credentials,
      createdAt: new Date(),
      updatedAt: new Date(),
      id: 2
    })
    return await new Promise<RegisterUserResponse>((resolve) => {
      resolve({
        data: {
          status: 201
        }
      })
    })
  }

  async getUserIdByAuthToolUserId (authToolUserId: string): Promise<GetUserIdByAuthToolUserIdResponse> {
    const user: UserWithoutPassword = {
      id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
      email: 'email',
      firstName: 'fn',
      lastName: 'ln',
      authToolUserId
    }
    return {
      data: {
        status: 200,
        user
      }
    }
  }

  async login (credentials: LoginCredentials): Promise<LoginUserResponse> {
    const user: UserWithoutPassword = {
      id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
      email: credentials.email,
      firstName: 'fn',
      lastName: 'ln',
      authToolUserId: ''
    }

    return {
      data: {
        status: 200,
        user
      }
    }
  }
}
