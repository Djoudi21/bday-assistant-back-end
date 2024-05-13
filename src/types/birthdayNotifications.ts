import { type Contact } from './contacts'
import { type User } from './auth'

export interface BirthdayNotification {
  id: number
  createdAt: Date
  updatedAt: Date
  toSendAt: Date
  message: string
  isSent: boolean
  contact: Contact
  contactId: number
  user: User
  userId: number
}

export interface GetBirthdayNotificationsResponse {
  data: {
    status: number
    birthdayNotifications: BirthdayNotification[] | []
  }
}
