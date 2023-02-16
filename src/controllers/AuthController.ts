import AuthAPI, { SignInData, SignUpData, changePasswordData } from '../api/AuthAPI';
import { store } from '../common/Store';

class AuthController {
  private api: AuthAPI;

  constructor() {
    this.api = new AuthAPI();
  }

  async signUp(data: SignUpData) {
    await this.api.signUp(data);
  }

  async signIn(data: SignInData) {
    await this.api.signIn(data);
  }

  async changePassword(data: changePasswordData) {
    await this.api.changePassword(data);
  }

  async logout() {
    await this.api.logout();
  }

  async fetchUser() {
    const userData = await this.api.read();

    store.set('currentUser', userData);
  }


}

export default new AuthController();
