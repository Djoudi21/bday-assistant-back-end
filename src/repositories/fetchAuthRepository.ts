import { PrismaClient } from '@prisma/client'
import { type AuthRepository } from './interfaces/authRepository'
import { type RegisterCredentials, type RegisterUserResponse } from '../types/auth'
const prisma = new PrismaClient()

export class FetchAuthRepository implements AuthRepository {
  async register (credentials: RegisterCredentials, authToolUserId: string): Promise<RegisterUserResponse> {

    await prisma.user.create({
      data: {
        firstname: credentials.firstname,
        lastname: credentials.lastname,
        email: credentials.email,
        password: credentials.password,
        authToolUserId
      }
    })
    return {
      data: {
        status: 201
      }
    }
  }

  async login (): Promise<any> {
    const contacts = await prisma.user.findMany()
    return {
      data: {
        status: 200,
        contacts
      }
    }
  }

  async getUserIdByAuthToolUserId (authToolUserId: string): Promise<number | null> {
    const user = await prisma.user.findFirst({
      where: {
        authToolUserId
      }
    })

    return (user !== null) ? user.id : null
  }
}
