import Expo from 'expo-server-sdk'
import { CronJob } from 'cron'
import { BirthdayNotificationsController } from '../controllers/birthdayNotificationsController'

const expo = new Expo()
const notificationTime = '02 4 * * *'

const compareDates = (date1: Date, date2: Date): boolean => {
  const sameYear = date1.getFullYear() === date2.getFullYear()
  const sameMonth = date1.getMonth() === date2.getMonth()
  const sameDay = date1.getDate() === date2.getDate()
  return sameYear && sameMonth && sameDay
}

const formatCron = (notificationTime: string): Date => {
  const formatedCron = extractCronComponents(notificationTime)
  const currentDate = new Date()
  currentDate.setMinutes(formatedCron.minute)
  currentDate.setHours(formatedCron.hour)
  return currentDate
}

const extractCronComponents = (cronExpression: string): {
  minute: number
  hour: number
  dayOfMonth: number
  month: number
  dayOfWeek: number
} => {
  const cronComponents = cronExpression.split(' ')
  return {
    minute: Number(cronComponents[0]),
    hour: Number(cronComponents[1]),
    dayOfMonth: Number(cronComponents[2]),
    month: Number(cronComponents[3]),
    dayOfWeek: Number(cronComponents[4])
  }
}

export const checkPendingTasks = new CronJob(notificationTime, async () => {
  const birthdayNotificationsController = new BirthdayNotificationsController()
  const userNotifications = await birthdayNotificationsController.getUserNotifications() // Get scheduled tasks for a specific user
  for (const notification of userNotifications.data.birthdayNotifications) {
    const notificationDate = new Date(notification.toSendAt)
    const formatedCron = formatCron(notificationTime)
    const isSameDate = compareDates(notificationDate, formatedCron)

    if (!notification.isSent && isSameDate) {
      const token = 'ExponentPushToken[gWqVpRGOX8Hp-oVhDI3W8s]'
      await expo.sendPushNotificationsAsync([
        {
          to: token,
          title: 'sdf',
          body: ' body of the notification'
        }
      ])
      await birthdayNotificationsController.setUserNotification(notification.id)
    }
  }
})
