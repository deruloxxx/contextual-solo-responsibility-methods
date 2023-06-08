import {User} from "./types";
import {getAdminUserData, getGeneralUserData, getUserData} from "./getUserData";


describe('Test each context type in the userLogin System', () => {
  const userId = 'testId';

  describe('Multi Context getUserData', () => {
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

  describe('One Context User Data', () => {
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
})
