import { type NewContact, type ListContactsResponse, type CreateContactResponse } from '../../types/contacts'

export interface ContactsRepository {
  listContacts: () => Promise<ListContactsResponse>
  createContact: (contact: NewContact) => Promise<CreateContactResponse>
}
