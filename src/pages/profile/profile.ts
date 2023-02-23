import './profile.less';
import { validateInputs } from '../../common/utils';
import {
  REGEXP_EMAIL, REGEXP_LOGIN, REGEXP_NAME, REGEXP_NICKNAME, REGEXP_PHONE,
} from '../../common/const';
import Block from '../../common/Block';
import UserController from '../../controllers/UserController';
import { IProfileData } from '../../api/UserAPI';
import AuthController from '../../controllers/AuthController';
import Router from '../../common/Router';

interface IProfileProps {
  id?: string;
  email?: string;
  login?: string;
  first_name?: string;
  second_name?: string;
  display_name?: string;
  phone?: string;
  avatar?: string;
}



interface IProfile extends IProfileProps {
  onClick: Function;
  onSaveAvatar: Function;
}

export class ProfilePage extends Block<IProfile> {
  constructor(props: IProfileProps) {
    super({
      ...props,
      ...{
        onClick: () => this.onSaveProfile(),
      }
    });
  }

  componentDidMount() {
    AuthController.fetchUser().catch(() => new Router().go('/signin'));
  }

  onSaveProfile() {
    const data = validateInputs(
      { elementId: 'email-profile', regexp: REGEXP_EMAIL },
      { elementId: 'login-profile', regexp: REGEXP_LOGIN },
      { elementId: 'first_name-profile', regexp: REGEXP_NAME },
      { elementId: 'second_name-profile', regexp: REGEXP_NAME },
      { elementId: 'display_name-profile', regexp: REGEXP_NICKNAME },
      { elementId: 'phone-profile', regexp: REGEXP_PHONE },
    );
    if (data) {
      UserController.updateProfile(data as IProfileData)
        .then(() => alert('Профиль успешно обновлен!'))
        .catch((error) => alert(`Ошибка выполнения запроса обновления профиля! ${error ? error.reason : ''}`));
    }
  }


  render() {
    const email = !this.props.email ? undefined : `"${this.props.email}"`;
    const login = !this.props.login ? undefined : `"${this.props.login}"`;
    const firstName = !this.props.first_name ? undefined : `"${this.props.first_name}"`;
    const secondName = !this.props.second_name ? undefined : `"${this.props.second_name}"`;
    const displayName = !this.props.display_name ? undefined : `"${this.props.display_name}"`;
    const phone = !this.props.phone ? undefined : `"${this.props.phone}"`;
    const avatar = !this.props.avatar ? undefined : `"${this.props.avatar}"`;
    // const avatar = !this.props.avatar ? '"https://previews.123rf.com/images/denizjdazel/denizjdazel1902/denizjdazel190200045/124841367-.jpg?fj=1"' : `"${this.props.avatar}"`;
    // {{{ Avatar changeAvatar=${funk} }}} - так было (убрал чтобы не выкидывал ошибку)
    // language=hbs
    return `
    <main class='allHtml'>

    <div class="profile">
    <div class="profile__item">
  {{{ Button_back }}}
    </div>
  
    <div class="profile__item">
    {{{ Avatar avatar=${avatar} }}}
    

  {{{ Title style='profile__title' text_title='Настройка профиля' }}}  
  <div class="profile__form_wrapper">
  <form class="profile-form__form">

  {{{ InputFieldProfile classInput="profile__input"  inputValue=${email} labelText="Почта:" inputId="email-profile" inputType="email"
  inputName="email" regexp="${REGEXP_EMAIL}" }}}

{{{ InputFieldProfile classInput="profile__input"  inputValue=${login} labelText="Логин:" inputId="login-profile" inputType="text"
  inputName="login" regexp="${REGEXP_LOGIN}" }}}

{{{ InputFieldProfile classInput="profile__input"  inputValue=${firstName} labelText="Имя:" inputId="first_name-profile" inputType="text"
  inputName="first_name" regexp="${REGEXP_NAME}" }}}

{{{ InputFieldProfile classInput="profile__input"  inputValue=${secondName} labelText="Фамилия:" inputId="second_name-profile" inputType="text"
  inputName="second_name" regexp="${REGEXP_NAME}" }}}

{{{ InputFieldProfile classInput="profile__input"  inputValue=${displayName} labelText="Никнэйм:" inputId="display_name-profile" inputType="text"
  inputName="display_name" regexp="${REGEXP_NICKNAME}" }}}

{{{ InputFieldProfile classInput="profile__input"  inputValue=${phone} labelText="Телефон:" inputId="phone-profile" inputType="tel"
  inputName="phone" regexp="${REGEXP_PHONE}" }}}


                     <div class="profile__redact">
<div class="profile__transition">
<div class="button-block">
{{{ Button  style_btn="profile__btn"  buttonId="button-save-profile" value="Сохранить" onClick=onClick }}}
</div>
<nav class="nav-block">
{{{ Text_transition  style_text="profile__text" text='Редактировать пароль' href="/profilePage_red" }}}
{{{ Text_transition  style_text="profile__text" text='На главную' href="/messages" }}}
</nav>
          </form>
        </div>
      </div>
      </main>


        
    `;
  }
}
