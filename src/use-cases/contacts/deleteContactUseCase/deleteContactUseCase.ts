import { type ContactsRepository } from '../../../repositories/interfaces/contactsRepository'
import { type Contact, type DeleteContactResponse } from '../../../types/contacts'

export class DeleteContactUseCase {
  contactsRepository: ContactsRepository

  constructor (contactsRepository: ContactsRepository) {
    this.contactsRepository = contactsRepository
  }

  async execute (contactId: Contact['id']): Promise<DeleteContactResponse> {
    return await this.contactsRepository.deleteContact(contactId)
  }
}
