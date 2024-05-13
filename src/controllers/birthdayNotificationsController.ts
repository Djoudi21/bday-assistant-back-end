import { PrismaBirthdayNotificationsRepository } from '../repositories/prismaBirthdayNotificationsRepository'
import {
  GetUserNotificationsUseCase
} from '../use-cases/birthday-notifications/getUserNotificationsUseCase/getUserNotificationsUseCase'
import type {
  BirthdayNotification,
  GetBirthdayNotificationsResponse,
  UpdateBirthdayNotificationsResponse
} from '../types/birthdayNotifications'
import {
  UpdateUserNotificationUseCase
} from '../use-cases/birthday-notifications/updateUserNotificationUseCase/updateUserNotificationUseCase'

export class BirthdayNotificationsController {
  async getUserNotifications (): Promise<GetBirthdayNotificationsResponse> {
    const birthdayNotificationsRepository = new PrismaBirthdayNotificationsRepository()
    const getUserNotificationsUseCase = new GetUserNotificationsUseCase(birthdayNotificationsRepository)
    return await getUserNotificationsUseCase.execute()
  }

  async setUserNotification (notificationId: BirthdayNotification['id']): Promise<UpdateBirthdayNotificationsResponse> {
    const birthdayNotificationsRepository = new PrismaBirthdayNotificationsRepository()
    const updateUserNotificationUseCase = new UpdateUserNotificationUseCase(birthdayNotificationsRepository)
    return await updateUserNotificationUseCase.execute(notificationId)
  }
}
