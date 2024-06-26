import { type ContactsRepository } from '../../../repositories/interfaces/contactsRepository'
import { type ListContactsResponse } from '../../../types/contacts'
import { type AuthRepository } from '../../../repositories/interfaces/authRepository'

export class ListContactsUseCase {
  contactsRepository: ContactsRepository
  authRepository: AuthRepository

  constructor (contactsRepository: ContactsRepository, authRepository: AuthRepository) {
    this.contactsRepository = contactsRepository
    this.authRepository = authRepository
  }

  async execute (authToolUserId: string): Promise<ListContactsResponse> {
    const response = await this.authRepository.getUserIdByAuthToolUserId(authToolUserId)
    const userId = response.data.user?.id
    if (userId === null || userId === undefined) {
      throw new Error(`User with authToolUserId ${authToolUserId} not found`)
    }
    return await this.contactsRepository.listContacts(userId)
  }
}
