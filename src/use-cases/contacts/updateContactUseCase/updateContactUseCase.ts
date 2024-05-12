import { type ContactsRepository } from '../../../repositories/interfaces/contactsRepository'
import type { Contact, UpdateContactResponse } from '../../../types/contacts'

export class UpdateContactUseCase {
  contactsRepository: ContactsRepository

  constructor (contactsRepository: ContactsRepository) {
    this.contactsRepository = contactsRepository
  }

  async execute (contact: Contact): Promise<UpdateContactResponse> {
    return await this.contactsRepository.updateContact(contact)
  }
}
