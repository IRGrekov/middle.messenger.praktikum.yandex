import Block from '../../common/Block';
import './authorization.less';
import { validateInputs } from '../../common/utils';
import { REGEXP_LOGIN, REGEXP_PASSWORD } from '../../common/const';
import AuthController from '../../controllers/AuthController';
import { SignInData } from '../../api/AuthAPI';
import Router from '../../common/Router';
import ChatController from '../../controllers/ChatController';

export class AuthorizationPage extends Block {
  constructor() {
    super({
      onClick: () => this.onSignIn(),
    });
  }

  componentDidMount() {
    AuthController.fetchUser().then(() => {
      const router = new Router();
      router.go('/messages');
    });
  }

  onSignIn() {
    const data = validateInputs({ elementId: 'login-auth', regexp: REGEXP_LOGIN }, { elementId: 'password-auth', regexp: REGEXP_PASSWORD });

    if (data) {
      AuthController.signIn(data as SignInData)
        .then(() => {
          // eslint-disable-next-line no-console
          console.log('Авторизация выполнена успешно >>>');
          ChatController.getChats();
          const router = new Router();
          router.go('/messages');
        })
        // eslint-disable-next-line no-alert
        .catch((error) => alert(`Ошибка выполнения запроса авторизации! ${error ? error.reason : ''}`));
    }
  }
  let arr
acs

render() {
  // language=hbs
  return `

    <main class="login">
    <div class="login__wrapper">
      <div class="login__item">
        {{{ Title style='login__title' text_title='Вход' }}}  
        <form  class="authorisation-form__form" id="loginData">
            <div class="input-block">
   
            {{{ InputField  classInput="login__input" labelText="Логин:" errorText="Должно содержать от 3 до 8 символов" inputId="login-auth" inputType="text" inputName="login" regexp="${REGEXP_LOGIN}" }}}
            {{{ InputField  classInput="login__input" labelText="Пароль:"  errorText="Должно содержать от 8 до 40 символов + Заглавный символ" inputId="password-auth" inputType="password" inputName="password" regexp="${REGEXP_PASSWORD}" }}}
            

    <div class="login__item">
    {{{ Button buttonId="button-auth" style_btn="login__btn" tyle_btn="login__btn" value="Войти" onClick=onClick }}}
    {{{ Link  style_text="login__text" text='Регистрация'  href="/sign-up" }}}
    </div>
    </form>
  </div>

</div>
    `;
}
}
