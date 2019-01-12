export class  User {
  name: string;
  password: string;

  constructor(body) {
    Object.assign(this, body);
  }
}
