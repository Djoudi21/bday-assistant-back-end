import { type ContactsRepository } from '../../../repositories/interfaces/contactsRepository'
import { type CreateContactResponse, type NewContact } from '../../../types/contacts'

export class CreateContactUseCase {
  contactsRepository: ContactsRepository

  constructor (contactsRepository: ContactsRepository) {
    this.contactsRepository = contactsRepository
  }

  async execute (newContact: NewContact): Promise<CreateContactResponse> {
    return await this.contactsRepository.createContact(newContact)
  }
}
