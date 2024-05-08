import { ListContactsUseCase } from '../use-cases/contacts/listContactsUseCase/listContactsUseCase'
import { type CreateContactResponse, type ListContactsResponse, type NewContact } from '../types/contacts'
import { CreateContactUseCase } from '../use-cases/contacts/createContactUseCase/createContactUseCase'
import { FetchContactsRepository } from '../repositories/fetchContactsRepository'
import { FetchAuthRepository } from '../repositories/fetchAuthRepository'

export class ContactsController {
  async listContacts (req: any, reply: any): Promise<ListContactsResponse> {
    const userId: string = req.query.authToolUserId
    const contactsRepository = new FetchContactsRepository()
    const authRepository = new FetchAuthRepository()
    const listContactsUseCase = new ListContactsUseCase(contactsRepository, authRepository)
    const response = await listContactsUseCase.execute(userId)
    return reply.status(response.data.status).send(response)
  }

  async createContact (req: any, reply: any): Promise<CreateContactResponse> {
    const contact: NewContact = req.body.data
    const userId: string = req.query.authToolUserId
    const contactsRepository = new FetchContactsRepository()
    const authRepository = new FetchAuthRepository()
    const createContactUseCase = new CreateContactUseCase(contactsRepository, authRepository)
    const response = await createContactUseCase.execute(contact, userId)
    return reply.status(response.data.status).send(response)
  }
}
