export class UserMulti {
  constructor(public name: string, public isAdmin: boolean = false) { }

  sendMessage(message: string) {
    if (this.isAdmin) {
      return `Admin ${this.name} sends: ${message}`;
    } else {
      throw new Error(`User ${this.name} is not allowed to send messages.`);
    }
  }
}
