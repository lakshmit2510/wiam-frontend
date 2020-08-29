export class User {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  authdata?: string;
}

export enum Role {
  Customer = 'Customer',
  Admin = 'Admin',
}

export class Data {
  day: string;
  oranges: number;
}
