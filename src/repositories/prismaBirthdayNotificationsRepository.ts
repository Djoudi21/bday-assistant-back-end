import { type BirthdayNotification, PrismaClient } from '@prisma/client'
import { type BirthdayNotificationsRepository } from './interfaces/birthdayNotificationsRepository'
import {
  type GetBirthdayNotificationsResponse,
  type UpdateBirthdayNotificationsResponse,
} from '../types/birthdayNotifications'
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

  async setUserNotification (notificationId: BirthdayNotification['id']): Promise<UpdateBirthdayNotificationsResponse> {
    const birthdayNotification = await prisma.birthdayNotification.findUnique({
      where: {
        id: notificationId
      }
    })

    if (birthdayNotification === null) {
      return {
        data: {
          status: 500
        }
      }
    }
    const { isSent, ...rest } = birthdayNotification
    await prisma.birthdayNotification.update({
      where: {
        id: rest.id
      },
      data: {
        isSent: true,
        ...rest
      }
    })

    return {
      data: {
        status: 200
      }
    }
  }
}
