export default class Validator {
  constructor(username) {
    this.username = username;
  }

  validateUsername() {
    if (
      /^[a-z]+[a-z0-9_-]+[a-z]$/i.test(this.username)
      && !/\d{4}/.test(this.username)
    ) {
      return true;
    }
    return false;
  }
}
