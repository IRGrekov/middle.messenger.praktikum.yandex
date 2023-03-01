import './profile.less';
import { validateInputs } from '../../common/utils';
import { REGEXP_PASSWORD } from '../../common/const';
import Block from '../../common/Block';
import UserController from '../../controllers/UserController';
import { changePasswordData } from '../../api/AuthAPI';
import AuthController from '../../controllers/AuthController';
import Router from '../../common/Router';

interface IProfileProps_red {
  newPassword: string;
  oldPassword: string;
  avatar?: string;
}

export class ProfilePage_red extends Block {
  constructor(props: IProfileProps_red) {
    super({
      ...props,
      onClick: () => this.onSaveProfile(),
    });
  }

  componentDidMount() {
    AuthController.fetchUser().catch(() => new Router().go('/'));
  }

  onSaveProfile() {
    const data = validateInputs(
      { elementId: 'newPassword', regexp: REGEXP_PASSWORD },
      { elementId: 'oldPassword', regexp: REGEXP_PASSWORD },
    );
    console.log('3');
    console.log(data);
    if (data) {
      console.log(data);
      UserController.changePassword(data as changePasswordData)
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
  {{{ Button_back }}}
    </div>
  
    <div class="profile__item">

  {{{ Title style='profile__title' text_title='Настройка профиля' }}}  
  <div class="profile__form_wrapper">
  <form class="profile-form__form">

  {{{ InputFieldProfile classInput="profile__input"  inputValue=${oldPassword} labelText="Текущий пароль:"  errorText="Должно содержать от 8 до 40 символов + Заглавный символ" inputId="oldPassword" inputType="password" inputName="oldPassword"
  regexp="${REGEXP_PASSWORD}" }}}

  {{{ InputFieldProfile classInput="profile__input"  inputValue=${newPassword} labelText="Новый пароль:"errorText="Должно содержать от 8 до 40 символов + Заглавный символ" inputId="newPassword" inputType="password_new" inputName="newPassword"

  regexp="${REGEXP_PASSWORD}" }}}

<div class="profile__transition">
<div class="button-block">
{{{ Button  style_btn="profile__btn"  buttonId="button-save-profile" value="Сохранить" onClick=onClick }}}
</div>
<nav class="nav-block">
{{{ Link  style_text="profile__text" text='На главную' href="/messages" }}}
{{{ Link  style_text="profile__text" text='Настройка профиля' href="/settings" }}}
</nav>
          </form>
        </div>
      </div>
      </main>

    `;
  }
}
