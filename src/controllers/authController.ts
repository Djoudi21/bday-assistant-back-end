import { RegisterUseCase } from '../use-cases/auth/registerUseCase/registerUseCase'
import { PrismaAuthRepository } from '../repositories/prismaAuthRepository'
import { type RegisterCredentials } from '../types/auth'

export class AuthController {
/*   async login (req: any, reply: any): Promise<any> {
    const credentials: LoginCredentials = {
      ...req.body.data
    }
    const authRepository = new PrismaAuthRepository()
    const loginUserUseCase = new LoginUserUseCase(authRepository)
    const response = await loginUserUseCase.execute(credentials)
    return reply.status(response.data.status).send(response)
  } */

  async register (req: any, reply: any): Promise<any> {
    const credentials: RegisterCredentials = {
      ...req.body.data
    }
    const authRepository = new PrismaAuthRepository()
    const registerUseCase = new RegisterUseCase(authRepository)
    const response = await registerUseCase.execute(credentials)
    return reply.status(response.data.status).send(response)
  }
}
