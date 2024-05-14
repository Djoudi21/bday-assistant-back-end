import { type FastifyInstance } from 'fastify'
import { ContactsController } from '../controllers/contactsController'

const contactsController = new ContactsController()

export async function contactsRouter (fastify: FastifyInstance): Promise<void> {
  fastify.route({
    method: 'GET',
    url: '/api/v1/contacts',
    handler: async (request, reply) => {
      await contactsController.listContacts(request, reply)
    }
  })
  fastify.route({
    method: 'POST',
    url: '/api/v1/contacts',
    handler: async (request, reply) => {
      await contactsController.createContact(request, reply)
    }
  })
  fastify.route({
    method: 'PUT',
    url: '/api/v1/contacts/:contactId',
    handler: async (request, reply) => {
      await contactsController.updateContact(request, reply)
    }
  })
  fastify.route({
    method: 'DELETE',
    url: '/api/v1/contacts/:contactId',
    handler: async (request, reply) => {
      await contactsController.deleteContact(request, reply)
    }
  })
}
