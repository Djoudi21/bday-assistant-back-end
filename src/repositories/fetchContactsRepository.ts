import { type ContactsRepository } from './interfaces/contactsRepository'
import { type CreateContactResponse, type ListContactsResponse, type NewContact } from '../types/contacts'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export class FetchContactsRepository implements ContactsRepository {
  async createContact (contact: NewContact, userId: number): Promise<CreateContactResponse> {
    const createdContact = await prisma.contact.create({
      data: {
        name: contact.name,
        birthday: contact.birthday,
        description: contact.description,
        userId
      }
    })

    return {
      data: {
        status: 200,
        contact: createdContact
      }
    }
  }

  async listContacts (userId: number): Promise<ListContactsResponse> {
    const contacts = await prisma.contact.findMany({
      where: {
        userId
      }
    })

    return {
      data: {
        status: 200,
        contacts
      }
    }
  }
}
