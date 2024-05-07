export interface Contact {
  name: string
  birthday: string
}

export interface ListContactsResponse {
  data: {
    status: number
    contacts: Contact[]
  }
}
