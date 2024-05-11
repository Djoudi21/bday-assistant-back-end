import type {
  GetUserIdByAuthToolUserIdResponse,
  LoginCredentials,
  LoginUserResponse,
  RegisterCredentials,
  RegisterUserResponse
} from '../../types/auth'

export interface AuthRepository {
  register: (credentials: RegisterCredentials) => Promise<RegisterUserResponse>
  login: (credentials: LoginCredentials) => Promise<LoginUserResponse>
  getUserIdByAuthToolUserId: (authToolUserId: string) => Promise<GetUserIdByAuthToolUserIdResponse>
}
