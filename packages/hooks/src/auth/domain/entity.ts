export enum Status {
  loading = 'loading',
  authorized = 'authorized',
  unauthorized = 'unauthorized'
}

export interface AuthEntity {
  status: Status
  user?: null | any
}
