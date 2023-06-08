import {User} from "../types";

export const getAdminUserData = (userId: string): User => {
  return {
    id: userId,
    email: 'user@example.com',
    password: 'password',
    data: 'data',
  };
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
