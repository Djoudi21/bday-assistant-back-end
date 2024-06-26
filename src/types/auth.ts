export interface User {
  id: number
  createdAt: Date
  updatedAt: Date
  email: string
  password: string
  firstName: string
  lastName: string
  authToolUserId: string | null
}

export interface UserWithoutPassword {
  id: number
  createdAt: Date
  updatedAt: Date
  email: string
  firstName: string
  lastName: string
  authToolUserId: string | undefined
}

export interface RegisterUserResponse {
  data: {
    status: number
  }
}

export interface GetUserIdByAuthToolUserIdResponse {
  data: {
    status: number
    user: UserWithoutPassword | null
  }
}

export interface RegisterCredentials {
  email: string
  password: string
  firstName: string
  lastName: string
  authToolUserId: string | null
}

export interface LoginUserResponse {
  data: {
    status: number
    user: UserWithoutPassword
  }
}

export interface LoginCredentials {
  email: string
  password: string
}
