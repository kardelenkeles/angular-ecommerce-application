export class LoginAction {
  public static readonly type = "[USER] login";

  constructor(public username: string, public password: string) {
  }
}

export class RegisterAction{
  public static readonly type = "[USER] register";

  constructor(public username: string, public password: string, public email: string) {
  }
}

export class LogoutAction{
  public static readonly type = "[USER] logout";

  constructor() {
  }
}
