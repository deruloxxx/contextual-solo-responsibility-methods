import {UserMulti} from "./userMulti";
import {AdminUser, RegularUser} from "./user";

  describe('Multi Context ChatUser', () => {
    it('allows admin to send message', () => {
      const admin = new UserMulti('Admin', true);
      const message = 'Hello, users!';
      expect(admin.sendMessage(message)).toBe(`Admin Admin sends: ${message}`);
    });

    it('does not allow non-admin user to send message', () => {
      const user = new UserMulti('Alice');
      expect(() => {
        user.sendMessage('Hello, world!');
      }).toThrowError('User Alice is not allowed to send messages.');
    });
  });

  describe('One Context ChatUser', () => {
    it('allows admin to send message', () => {
      const admin = new AdminUser('Admin');
      const message = 'Hello, users!';
      expect(admin.sendMessage(message)).toBe(`Admin Admin sends: ${message}`);
    });

    it('does not allow non-admin user to send message', () => {
      const user = new RegularUser('Alice');
      expect(() => {
        user.sendMessage();
      }).toThrowError('User Alice is not allowed to send messages.');
    });
  });
