import { ListContactsUseCase } from '../use-cases/contacts/listContactsUseCase/listContactsUseCase'
import { InMemoryContactsRepository } from '../repositories/inMemoryContactsRepository'
import { CreateContactResponse, type ListContactsResponse, NewContact } from '../types/contacts'
import { CreateContactUseCase } from '../use-cases/contacts/createContactUseCase/createContactUseCase'
import { FetchContactsRepository } from '../repositories/fetchContactsRepository'

export class ContactsController {
  async listContacts (req: any, reply: any): Promise<ListContactsResponse> {
    const contactsRepository = new FetchContactsRepository()
    const listContactsUseCase = new ListContactsUseCase(contactsRepository)
    const response = await listContactsUseCase.execute()
    return reply.status(response.data.status).send(response)
  }

  async createContact (req: any, reply: any): Promise<CreateContactResponse> {
    const contact: NewContact = req.body.data
    const contactsRepository = new FetchContactsRepository()
    const listContactsUseCase = new CreateContactUseCase(contactsRepository)
    const response = await listContactsUseCase.execute(contact)
    return reply.status(response.data.status).send(response)
  }
}
