import Fastify from 'fastify'
import cors from '@fastify/cors'
import 'dotenv/config'
import { authRouter } from './routes/auth'
import { contactsRouter } from './routes/contacts'
import { clerkPlugin } from '@clerk/fastify'
import * as dotenv from 'dotenv'

dotenv.config()
const port = Number(process.env.PORT)
const host = process.env.HOST
const fastify = Fastify({
  logger: true
})

void fastify.register(authRouter)
void fastify.register(contactsRouter)
void fastify.register(clerkPlugin)
void fastify.register(cors, {})

// Run the server!
fastify.listen({ port, host }, function (err, address) {
  if (err !== null) {
    fastify.log.error(err)
    process.exit(1)
  }
  fastify.log.info(`server listening on ${address}`)
})
