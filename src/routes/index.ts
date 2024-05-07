import { type FastifyInstance } from 'fastify'
import { HelloWorldController } from '../controllers/helloWorldController'
import { ContactsController } from '../controllers/contactsController'

const helloWorldController = new HelloWorldController()
const contactsController = new ContactsController()

export async function router (fastify: FastifyInstance): Promise<void> {
  fastify.route({
    method: 'GET',
    url: '/api/v1/hello-world',
    handler: async (request, reply) => {
      await helloWorldController.sayHello(request, reply)
    }
  })
  fastify.route({
    method: 'GET',
    url: '/api/v1/contacts',
    handler: async (request, reply) => {
      await contactsController.listContacts(request, reply)
    }
  })
}
