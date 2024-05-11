import { ListContactsUseCase } from '../use-cases/contacts/listContactsUseCase/listContactsUseCase'
import { type CreateContactResponse, type ListContactsResponse, type NewContact } from '../types/contacts'
import { CreateContactUseCase } from '../use-cases/contacts/createContactUseCase/createContactUseCase'
import { PrismaContactsRepository } from '../repositories/prismaContactsRepository'
import { PrismaAuthRepository } from '../repositories/prismaAuthRepository'

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
}
