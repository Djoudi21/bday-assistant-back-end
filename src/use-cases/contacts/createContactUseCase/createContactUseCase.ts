import { type ContactsRepository } from '../../../repositories/interfaces/contactsRepository'
import { type CreateContactResponse, type NewContact } from '../../../types/contacts'
import { type AuthRepository } from '../../../repositories/interfaces/authRepository'

export class CreateContactUseCase {
  contactsRepository: ContactsRepository
  authRepository: AuthRepository

  constructor (contactsRepository: ContactsRepository, authRepository: AuthRepository) {
    this.contactsRepository = contactsRepository
    this.authRepository = authRepository
  }

  async execute (newContact: NewContact, authToolUserId: string): Promise<CreateContactResponse> {
    const response = await this.authRepository.getUserIdByAuthToolUserId(authToolUserId)
    const userId = response.data.user?.id
    if (userId === null || userId === undefined) {
      throw new Error(`User with authToolUserId ${authToolUserId} not found`)
    }
    return await this.contactsRepository.createContact(newContact, userId)
  }
}
