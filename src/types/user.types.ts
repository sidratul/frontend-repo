export interface User {
  id: string;
  name: string;
  email: string;
  password?: string;
  address: string;
  phoneNumber: string;
}

export type UserLogin = Required<Pick<User, 'email' | 'password'>>;