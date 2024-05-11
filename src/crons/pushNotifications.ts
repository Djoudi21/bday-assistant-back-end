import Expo from 'expo-server-sdk'
import { CronJob } from 'cron'

const expo = new Expo()

new CronJob(
  '*/60*****',
  async function () {
    const token = 'ExponentPushToken[gWqVpRGOX8Hp-oVhDI3W8s]'
    await expo.sendPushNotificationsAsync([
      {
        to: token,
        title: 'sdf',
        body: ' body of the notification'
      }
    ])
  }
)
