import { type ContactsRepository } from './interfaces/contactsRepository'
import { type CreateContactResponse, type ListContactsResponse, type NewContact } from '../types/contacts'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export class FetchContactsRepository implements ContactsRepository {
  async createContact (contact: NewContact): Promise<CreateContactResponse> {
    const createdContact = await prisma.contact.create({
      data: {
        name: contact.name,
        birthday: contact.birthday,
        description: contact.description
      }
    })

    return {
      data: {
        status: 200,
        contact: createdContact
      }
    }
  }

  async listContacts (): Promise<ListContactsResponse> {
    const contacts = await prisma.contact.findMany()

    return {
      data: {
        status: 200,
        contacts
      }
    }
  }
}
