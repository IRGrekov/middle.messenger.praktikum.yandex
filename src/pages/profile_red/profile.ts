import './profile.less';
import { validateInputs } from '../../common/utils';
import { REGEXP_PASSWORD } from '../../common/const';
import Block from '../../common/Block';
import UserController from '../../controllers/UserController';
import { IProfileData } from '../../api/UserAPI';
import { changePasswordData } from '../../api/AuthAPI';
import AuthController from '../../controllers/AuthController';
import Router from '../../common/Router';

interface IProfileProps_red {
  newPassword: string;
  oldPassword: string;
}

interface IProfile_red extends IProfileProps_red {
  onClick: Function;
}

export class ProfilePage_red extends Block<IProfile_red> {
  constructor(props: IProfileProps_red) {
    super({
      ...props,
      onClick: () => this.onSaveProfile(),
    });
  }

  componentDidMount() {
    AuthController.fetchUser().catch(() => new Router().go('/signin'));
  }

  onSaveProfile() {
    const data = validateInputs(
      { elementId: 'newPassword', regexp: REGEXP_PASSWORD },
      { elementId: 'oldPassword', regexp: REGEXP_PASSWORD },
    );
    if (data) {
      AuthController.changePassword(data as changePasswordData)
        .then(() => alert('Профиль успешно обновлен!'))
        .catch((error) => alert(`Ошибка выполнения запроса авторизации! ${error ? error.reason : ''}`));
    }
  }



  render() {
    const newPassword = !this.props.newPassword ? undefined : `"${this.props.newPassword}"`;
    const oldPassword = !this.props.oldPassword ? undefined : `"${this.props.oldPassword}"`;

    // const avatar = !this.props.avatar ? '"https://previews.123rf.com/images/denizjdazel/denizjdazel1902/denizjdazel190200045/124841367-.jpg?fj=1"' : `"${this.props.avatar}"`;

    // language=hbs
    return `
    <main class='allHtml'>

    <div class="profile">
    <div class="profile__item">
    <button id='{{id}}' class="profile__back_btn">
    <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="13" y="6.80005" width="11" height="1.6" transform="rotate(-180 13 6.80005)" fill="white" />
      <path d="M6 11L2 6L6 1" stroke="white" stroke-width="1.6" />
    </svg>
  
  </button>
    </div>
  
    <div class="profile__item">
    {{{ Avatar }}}

  {{{ Title style='profile__title' text_title='Настройка профиля' }}}  
  <div class="profile__form_wrapper">
  <form class="profile-form__form">

  {{{ InputFieldProfile classInput="profile__input"  labelText="Пароль:"  errorText="Должно содержать от 8 до 40 символов + Заглавный символ" inputId="oldPassword" inputType="password" inputName="password" regexp="${REGEXP_PASSWORD}" }}}
  {{{ InputFieldProfile classInput="profile__input"  labelText="Новый Пароль:"  errorText="Должно содержать от 8 до 40 символов + Заглавный символ" inputId="newPassword" inputType="password_new" inputName="password_new" regexp="${REGEXP_PASSWORD}" }}}


<div class="profile__transition">
<div class="button-block">
{{{ Button  style_btn="profile__btn"  buttonId="button-save-profile" value="Сохранить" onClick=onClick }}}

</div>
<nav class="nav-block">
{{{ Text_transition  style_text="profile__text" text='На главную' href="/messages" }}}
{{{ Text_transition  style_text="profile__text" text='Настройка профиля' href="/profile" }}}
</nav>
          </form>
        </div>
      </div>
      </main>


        
    `;
  }
}
