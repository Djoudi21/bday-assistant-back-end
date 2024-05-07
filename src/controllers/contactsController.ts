import { ListContactsUseCase } from '../use-cases/contacts/listContactsUseCase/listContactsUseCase'
import { InMemoryContactsRepository } from '../repositories/inMemoryContactsRepository'
import { type ListContactsResponse } from '../types/contacts'

export class ContactsController {
  async listContacts (req: any, reply: any): Promise<ListContactsResponse> {
    const contactsRepository = new InMemoryContactsRepository()
    const listContactsUseCase = new ListContactsUseCase(contactsRepository)
    const response = await listContactsUseCase.execute()
    console.log('RES', response)
    return reply.status(response.data.status).send(response)
  }
}
