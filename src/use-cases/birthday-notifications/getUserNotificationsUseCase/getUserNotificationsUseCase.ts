import type { BirthdayNotificationsRepository } from '../../../repositories/interfaces/birthdayNotificationsRepository'
import { type GetBirthdayNotificationsResponse } from '../../../types/birthdayNotifications'

export class GetUserNotificationsUseCase {
  birthdayNotificationsRepository: BirthdayNotificationsRepository

  constructor (birthdayNotificationsRepository: BirthdayNotificationsRepository) {
    this.birthdayNotificationsRepository = birthdayNotificationsRepository
  }

  async execute (): Promise<GetBirthdayNotificationsResponse> {
    return await this.birthdayNotificationsRepository.getUserNotifications()
  }
}
