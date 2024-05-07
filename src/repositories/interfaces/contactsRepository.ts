import { type ListContactsResponse } from '../../types/contacts'

export interface ContactsRepository {
  listContacts: () => Promise<ListContactsResponse>
}
