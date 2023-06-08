export type Role = 'ADMIN' | 'USER';

export interface User {
  id: string;
  email: string;
  password: string;
  data: string;
}

export const getAdminUserData = (userId: string): User => {
  const user: User = {
    id: userId,
    email: 'user@example.com',
    password: 'password',
    data: 'data',
  };

  return user;
};

export const getGeneralUserData = (userId: string): Omit<User, 'password'> => {
  const user: User = {
    id: userId,
    email: 'user@example.com',
    password: 'password',
    data: 'data',
  };

  const { password, ...userLimitedData } = user;
  return userLimitedData;
};
