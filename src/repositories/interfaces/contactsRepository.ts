import {
  type NewContact,
  type ListContactsResponse,
  type CreateContactResponse,
  Contact,
  UpdateContactResponse,
} from '../../types/contacts'

export interface ContactsRepository {
  listContacts: (userId: number) => Promise<ListContactsResponse>
  createContact: (contact: NewContact, userId: number) => Promise<CreateContactResponse>
  updateContact: (contact: Contact) => Promise<UpdateContactResponse>
}
