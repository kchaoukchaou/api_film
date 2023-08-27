export class User {

  private readonly _username: string;
  private readonly _password: string;

  /**
   * @param username
   * @param password
   */
  constructor(username: string,
              password: string,
  ) {
    this._username = username;
    this._password = password;
  }

  public get username(): string {
    return this._username;
  }

  public get password(): string {
    return this._password;
  }
}
