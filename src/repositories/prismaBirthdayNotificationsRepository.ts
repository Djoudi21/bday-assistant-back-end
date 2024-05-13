import { PrismaClient } from '@prisma/client'
import { type BirthdayNotificationsRepository } from './interfaces/birthdayNotificationsRepository'
import { type GetBirthdayNotificationsResponse } from '../types/birthdayNotifications'
const prisma = new PrismaClient()

export class PrismaBirthdayNotificationsRepository implements BirthdayNotificationsRepository {
  async getUserNotifications (): Promise<GetBirthdayNotificationsResponse> {
    const birthdayNotifications = await prisma.birthdayNotification.findMany({
      include: {
        user: true,
        contact: true
      }
    })

    const mappedNotifications = birthdayNotifications.map(notification => ({
      id: notification.id,
      createdAt: notification.createdAt,
      updatedAt: notification.updatedAt,
      toSendAt: notification.toSendAt,
      message: notification.message,
      isSent: notification.isSent,
      contact: notification.contact,
      contactId: notification.contactId,
      user: notification.user,
      userId: notification.userId
    }))

    if (mappedNotifications.length === 0) {
      return {
        data: {
          status: 500,
          birthdayNotifications: []
        }
      }
    }

    return {
      data: {
        status: 200,
        birthdayNotifications: mappedNotifications
      }
    }
  }
}
