import { RegisterUseCase } from '../use-cases/auth/registerUseCase/registerUseCase'
import { FetchAuthRepository } from '../repositories/fetchAuthRepository'
import { type RegisterCredentials } from '../types/auth'

export class AuthController {
  async login (req: any, reply: any): Promise<any> {
    /* const authRepository = new FetchAuthRepository()
    const loginUserUseCase = new Login(authRepository)
    const response = await loginUserUseCase.execute()
    return reply.status(response.data.status).send(response) */
  }

  async register (req: any, reply: any): Promise<any> {
    const credentials: RegisterCredentials = {
      ...req.body.data
    }
    const authRepository = new FetchAuthRepository()
    const registerUseCase = new RegisterUseCase(authRepository)
    const response = await registerUseCase.execute(credentials)
    return reply.status(response.data.status).send(response)
  }
}
