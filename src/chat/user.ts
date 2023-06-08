export class User {
  constructor(public name: string) {}
}

export class AdminUser extends User {
  sendMessage(message: string) {
    return `Admin ${this.name} sends: ${message}`;
  }
}

export class RegularUser extends User {
  sendMessage() {
    throw new Error(`User ${this.name} is not allowed to send messages.`);
  }
}
