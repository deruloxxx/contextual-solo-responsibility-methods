import {getUserData, User} from "./getUserData";

describe('getUserData', () => {
  const userId = 'testId';

  test('should return all user data for ADMIN role', () => {
    const result: Partial<User> = getUserData('ADMIN', userId);

    expect(result).toEqual({
      id: userId,
      email: 'user@example.com',
      password: 'password',
      data: 'data'
    });
  });

  test('should return limited user data for USER role', () => {
    const result: Partial<User> = getUserData('USER', userId);

    expect(result).toEqual({
      id: userId,
      email: 'user@example.com',
      data: 'data'
    });
  });
});
