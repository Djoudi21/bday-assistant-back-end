import { type ContactsRepository } from './interfaces/contactsRepository'
import {
  type Contact,
  type CreateContactResponse,
  type ListContactsResponse,
  type NewContact,
  type UpdateContactResponse
} from '../types/contacts'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export class PrismaContactsRepository implements ContactsRepository {
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

  async updateContact (contact: Contact): Promise<UpdateContactResponse> {
    const { id, userId, ...rest } = contact

    const updatedContact = await prisma.contact.update({
      where: {
        id: parseInt(String(id), 10)
      },
      data: {
        id: parseInt(String(id), 10),
        userId: parseInt(String(userId), 10),
        ...rest
      }
    })

    if (updatedContact === null) {
      return {
        data: {
          status: 404,
          contact: undefined
        }
      }
    }

    return {
      data: {
        status: 200,
        contact: updatedContact
      }
    }
  }
}
