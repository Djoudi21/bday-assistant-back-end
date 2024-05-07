import { type ContactsRepository } from './interfaces/contactsRepository'
import { type ListContactsResponse } from '../types/contacts'

export class InMemoryContactsRepository implements ContactsRepository {
  async listContacts (): Promise<ListContactsResponse> {
    return await new Promise<ListContactsResponse>((resolve) => {
      resolve({
        data: {
          status: 200,
          contacts: [
            { name: 'Abdel Djoudi', birthday: '1990-01-01' }
          ]
        }
      })
    })
  }
}
