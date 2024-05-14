import {
  type NewContact,
  type ListContactsResponse,
  type CreateContactResponse,
  type Contact,
  type UpdateContactResponse
} from '../../types/contacts'

export interface ContactsRepository {
  listContacts: (userId: number) => Promise<ListContactsResponse>
  createContact: (contact: NewContact, userId: number) => Promise<CreateContactResponse>
  updateContact: (contact: Contact) => Promise<UpdateContactResponse>
  deleteContact: (contactId: Contact['id']) => Promise<UpdateContactResponse>
}
