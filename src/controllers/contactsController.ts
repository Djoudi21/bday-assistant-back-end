import { ListContactsUseCase } from '../use-cases/contacts/listContactsUseCase/listContactsUseCase'
import {
  type CreateContactResponse,
  type DeleteContactResponse,
  type ListContactsResponse,
  type NewContact
} from '../types/contacts'
import { CreateContactUseCase } from '../use-cases/contacts/createContactUseCase/createContactUseCase'
import { PrismaContactsRepository } from '../repositories/prismaContactsRepository'
import { PrismaAuthRepository } from '../repositories/prismaAuthRepository'
import { type Contact } from '@prisma/client'
import { UpdateContactUseCase } from '../use-cases/contacts/updateContactUseCase/updateContactUseCase'
import { DeleteContactUseCase } from '../use-cases/contacts/deleteContactUseCase/deleteContactUseCase'
import { type User } from '../types/auth'

export class ContactsController {
  async listContacts (req: any, reply: any): Promise<ListContactsResponse> {
    const authToolUserId: string = req.query.authToolUserId
    const contactsRepository = new PrismaContactsRepository()
    const authRepository = new PrismaAuthRepository()
    const listContactsUseCase = new ListContactsUseCase(contactsRepository, authRepository)
    const response = await listContactsUseCase.execute(authToolUserId)
    return reply.status(response.data.status).send(response)
  }

  async createContact (req: any, reply: any): Promise<CreateContactResponse> {
    const contact: NewContact = req.body.data
    const userId: string = req.query.authToolUserId
    const contactsRepository = new PrismaContactsRepository()
    const authRepository = new PrismaAuthRepository()
    const createContactUseCase = new CreateContactUseCase(contactsRepository, authRepository)
    const response = await createContactUseCase.execute(contact, userId)
    return reply.status(response.data.status).send(response)
  }

  async updateContact (req: any, reply: any): Promise<CreateContactResponse> {
    const contact: Contact = req.body.data
    const contactsRepository = new PrismaContactsRepository()
    const updateContactUseCase = new UpdateContactUseCase(contactsRepository)
    const response = await updateContactUseCase.execute(contact)
    return reply.status(response.data.status).send(response)
  }

  async deleteContact (req: any, reply: any): Promise<DeleteContactResponse> {
    const contactId: Contact['id'] = Number(req.params.contactId)
    const contactsRepository = new PrismaContactsRepository()
    const deleteContactUseCase = new DeleteContactUseCase(contactsRepository)
    const response = await deleteContactUseCase.execute(contactId)
    return reply.status(response.data.status).send(response)
  }
}
