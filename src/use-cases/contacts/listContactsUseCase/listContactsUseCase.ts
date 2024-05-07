import { type ContactsRepository } from '../../../repositories/interfaces/contactsRepository'
import { type ListContactsResponse } from '../../../types/contacts'

export class ListContactsUseCase {
  contactsRepository: ContactsRepository

  constructor (contactsRepository: ContactsRepository) {
    this.contactsRepository = contactsRepository
  }

  async execute (): Promise<ListContactsResponse> {
    return await this.contactsRepository.listContacts()
  }
}
