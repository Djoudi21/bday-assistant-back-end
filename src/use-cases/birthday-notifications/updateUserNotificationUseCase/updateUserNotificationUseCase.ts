import type { BirthdayNotificationsRepository } from '../../../repositories/interfaces/birthdayNotificationsRepository'
import {
  type BirthdayNotification,
  type UpdateBirthdayNotificationsResponse
} from '../../../types/birthdayNotifications'

export class UpdateUserNotificationUseCase {
  birthdayNotificationsRepository: BirthdayNotificationsRepository

  constructor (birthdayNotificationsRepository: BirthdayNotificationsRepository) {
    this.birthdayNotificationsRepository = birthdayNotificationsRepository
  }

  async execute (userId: BirthdayNotification['id']): Promise<UpdateBirthdayNotificationsResponse> {
    return await this.birthdayNotificationsRepository.setUserNotification(userId)
  }
}
