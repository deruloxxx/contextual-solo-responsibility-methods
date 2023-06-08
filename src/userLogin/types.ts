export type Role = 'ADMIN' | 'USER';

export interface User {
  id: string;
  email: string;
  password: string;
  data: string;
}