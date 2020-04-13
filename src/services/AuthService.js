import { Log, User, UserManager } from 'oidc-client';

import { Constants } from '../helpers/Constants.js';

export class AuthService {
  userManager: UserManager;

  constructor() {
    const settings = {
      authority: Constants.stsAuthority,
      client_id: Constants.clientId,
      redirect_uri: Constants.clientRoot +'signin-callback.html',
      silent_redirect_uri: Constants.clientRoot +'silent-renew.html',
      // tslint:disable-next-line:object-literal-sort-keys
      post_logout_redirect_uri: Constants.clientRoot,
      response_type: 'code',
      scope: Constants.clientScope
    };
    console.log(settings);
    this.userManager = new UserManager(settings);

    Log.logger = console;
    Log.level = Log.INFO;
  }

  getUser(): Promise<User | null> {
    return this.userManager.getUser();
  }

  login(): Promise<void> {
    return this.userManager.signinRedirect();
  }

  renewToken(): Promise<User> {
    return this.userManager.signinSilent();
  }

  logout(): Promise<void> {
    return this.userManager.signoutRedirect();
  }
}