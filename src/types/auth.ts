export interface User {
  id: number
  createdAt: Date
  updatedAt: Date
  email: string
  password: string
  firstname?: string
  lastname?: string
}

export interface RegisterUserResponse {
  data: {
    status: number
  }
}

export interface RegisterCredentials {
  email: string
  password: string
  firstname?: string
  lastname?: string
}
