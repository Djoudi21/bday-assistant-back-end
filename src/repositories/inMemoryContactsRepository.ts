import { type ContactsRepository } from './interfaces/contactsRepository'
import {
  type Contact,
  type CreateContactResponse,
  type ListContactsResponse,
  type NewContact,
  type UpdateContactResponse
} from '../types/contacts'

export class InMemoryContactsRepository implements ContactsRepository {
  public contacts: Contact[] = [
    {
      name: 'Abdel Djoudi',
      birthday: new Date(),
      id: 1,
      description: 'descr',
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 0
    },
    {
      name: 'Abdel Djoudi',
      birthday: new Date(),
      id: 2,
      description: 'descr',
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 0
    }
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
    const newContact = {
      ...createdContact,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 0
    }
    this.contacts = [...this.contacts, { ...newContact }]
    return await new Promise<CreateContactResponse>((resolve) => {
      resolve({
        data: {
          status: 200,
          contact: { ...newContact }
        }
      })
    })
  }

  async updateContact (contact: Contact): Promise<UpdateContactResponse> {
    return {
      data: {
        status: 200,
        contact
      }
    }
  }
}
