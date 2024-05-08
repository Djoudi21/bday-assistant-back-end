import { type ContactsRepository } from './interfaces/contactsRepository'
import { type Contact, type CreateContactResponse, type ListContactsResponse, type NewContact } from '../types/contacts'

export class InMemoryContactsRepository implements ContactsRepository {
  public contacts: Contact[] = [
    { name: 'Abdel Djoudi', birthday: '1990-01-01', id: 1, description: 'descr', createdAt: new Date(), updatedAt: new Date() },
    { name: 'Abdel Djoudi', birthday: '1990-01-01', id: 2, description: 'descr', createdAt: new Date(), updatedAt: new Date() }
  ]

  async listContacts (): Promise<ListContactsResponse> {
    return await new Promise<ListContactsResponse>((resolve) => {
      resolve({
        data: {
          status: 200,
          contacts: this.contacts
        }
      })
    })
  }

  async createContact (contact: NewContact): Promise<CreateContactResponse> {
    const createdContact = { ...contact, id: 3 }
    const newContact = { ...createdContact, createdAt: new Date(), updatedAt: new Date() }
    this.contacts = [...this.contacts, newContact]
    return await new Promise<CreateContactResponse>((resolve) => {
      resolve({
        data: {
          status: 200,
          contact: newContact
        }
      })
    })
  }
}
