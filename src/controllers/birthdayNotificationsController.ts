import { PrismaBirthdayNotificationsRepository } from '../repositories/prismaBirthdayNotificationsRepository'
import {
  GetUserNotificationsUseCase
} from '../use-cases/birthday-notifications/getUserNotificationsUseCase/getUserNotificationsUseCase'
import type { GetBirthdayNotificationsResponse } from '../types/birthdayNotifications'

export class BirthdayNotificationsController {
  async getUserNotifications (): Promise<GetBirthdayNotificationsResponse> {
    const birthdayNotificationsRepository = new PrismaBirthdayNotificationsRepository()
    const getUserNotificationsUseCase = new GetUserNotificationsUseCase(birthdayNotificationsRepository)
    return await getUserNotificationsUseCase.execute()
  }
}
