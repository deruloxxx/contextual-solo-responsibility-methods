import {Role, User} from "../types";

export const getUserData = (role: Role, userId: string): Partial<User> => {
  const user: User = {
    id: userId,
    email: 'user@example.com',
    password: 'password',
    data: 'data',
  };

  if (role === 'ADMIN') {
    return user;
  } else if (role === 'USER') {
    const { password, ...userLimitedData } = user;
    return userLimitedData;
  }

  return {};
};
