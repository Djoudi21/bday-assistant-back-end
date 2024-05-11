import { PrismaClient } from '@prisma/client'
import { type AuthRepository } from './interfaces/authRepository'
import {
  GetUserIdByAuthToolUserIdResponse,
  type LoginCredentials,
  type RegisterCredentials,
  type RegisterUserResponse,
} from '../types/auth'
const prisma = new PrismaClient()

export class PrismaAuthRepository implements AuthRepository {
  async register (credentials: RegisterCredentials): Promise<RegisterUserResponse> {
    await prisma.user.create({
      data: {
        firstName: credentials.firstName,
        lastName: credentials.lastName,
        email: credentials.email,
        password: credentials.password,
        authToolUserId: credentials.authToolUserId
      }
    })
    return {
      data: {
        status: 201
      }
    }
  }

  async login (credentials: LoginCredentials): Promise<any> {
    const user = await prisma.user.findUnique({
      where: {
        email: credentials.email
      }
    })
    return {
      data: {
        status: 200,
        user
      }
    }
  }

  async getUserIdByAuthToolUserId (authToolUserId: string): Promise<GetUserIdByAuthToolUserIdResponse> {
    const user = await prisma.user.findFirst({
      where: {
        authToolUserId
      }
    })

    if (user === null) {
      return {
        data: {
          status: 401,
          user: null
        }
      }
    }

    return {
      data: {
        status: 401,
        user: {
          ...user,
          authToolUserId
        }
      }
    }
  }
}
