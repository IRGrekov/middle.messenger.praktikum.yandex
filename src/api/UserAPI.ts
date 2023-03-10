import HTTPTransport from '../common/HTTPTransport';

export interface IProfileData {
  first_name: 'string';
  second_name: 'string';
  display_name: 'string';
  login: 'string';
  email: 'string';
  phone: 'string';
}

export interface ChangePasswordData {
  oldPassword: string;
  newPassword: string;
}

export default class UserAPI {
  protected http: HTTPTransport;

  constructor() {
    this.http = new HTTPTransport('/user');
  }

  update(profile: IProfileData): Promise<string> {
    return this.http.put('/profile', profile);
  }

  changePassword(data: ChangePasswordData): Promise<string> {
    console.log('1');

    return this.http.put('/password', data);
  }

  changeAvatarData(data: FormData): Promise<string> {
    return this.http.put('/profile/avatar', data);
  }
}
