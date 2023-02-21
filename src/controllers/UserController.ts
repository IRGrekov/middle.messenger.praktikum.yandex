import UserAPI, { IProfileData, changePasswordData } from '../api/UserAPI';

class UserController {
  private api: UserAPI;

  constructor() {
    this.api = new UserAPI();
  }

  async updateProfile(profile: IProfileData) {
    await this.api.update(profile);
  }

  async changePassword(data: changePasswordData) {
    //console.log("222")
    await this.api.changePassword(data);
  }

  async changeAvatar(data: FormData) {
    console.log("222")
    await this.api.changeAvatarData(data);
  }

}

export default new UserController();
