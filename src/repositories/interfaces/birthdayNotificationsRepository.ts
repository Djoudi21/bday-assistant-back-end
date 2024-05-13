import { type GetBirthdayNotificationsResponse } from '../../types/birthdayNotifications'

export interface BirthdayNotificationsRepository {
  getUserNotifications: () => Promise<GetBirthdayNotificationsResponse>
}
