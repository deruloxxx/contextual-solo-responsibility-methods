import {User} from "../types";
import {getAdminUserData, getGeneralUserData} from "./getUserData";

describe('User Data', () => {
  const userId = 'testId';

  test('getAdminUserData should return all user data', () => {
    const result: User = getAdminUserData(userId);

    expect(result).toEqual({
      id: userId,
      email: 'user@example.com',
      password: 'password',
      data: 'data'
    });
  });

  test('getGeneralUserData should return limited user data', () => {
    const result: Omit<User, 'password'> = getGeneralUserData(userId);

    expect(result).toEqual({
      id: userId,
      email: 'user@example.com',
      data: 'data'
    });
  });
});
