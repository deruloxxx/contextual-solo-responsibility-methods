import {User} from "./user";

describe('Test each context type in the ChatUser', () => {
  describe('Multi Context ChatUser', () => {
    it('allows admin to send message', () => {
      const admin = new User('Admin', true);
      const message = 'Hello, users!';
      expect(admin.sendMessage(message)).toBe(`Admin Admin sends: ${message}`);
    });

    it('does not allow non-admin user to send message', () => {
      const user = new User('Alice');
      expect(() => {
        user.sendMessage('Hello, world!');
      }).toThrowError('User Alice is not allowed to send messages.');
    });
  });
});
