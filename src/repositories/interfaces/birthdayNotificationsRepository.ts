import {
  type BirthdayNotification,
  type GetBirthdayNotificationsResponse,
  type UpdateBirthdayNotificationsResponse,
} from '../../types/birthdayNotifications'

export interface BirthdayNotificationsRepository {
  getUserNotifications: () => Promise<GetBirthdayNotificationsResponse>
  setUserNotification: (notificationId: BirthdayNotification['id']) => Promise<UpdateBirthdayNotificationsResponse>
}
