/* eslint-disable max-len */
import Block from '../../common/Block';
import './registration.less';
import { validateInputs } from '../../common/utils';
import {
  REGEXP_EMAIL, REGEXP_LOGIN, REGEXP_NAME, REGEXP_PASSWORD, REGEXP_PHONE,
} from '../../common/const';
import AuthController from '../../controllers/AuthController';
import { SignUpData } from '../../api/AuthAPI';
import Router from '../../common/Router';

export class RegistrationPage extends Block {
  constructor() {
    super({
      onSignUp: () => this.onSignUp(),
    });
  }

  async onSignUp() {
    const data = validateInputs(
      { elementId: 'email-reg', regexp: REGEXP_EMAIL },
      { elementId: 'login-reg', regexp: REGEXP_LOGIN },
      { elementId: 'first_name-reg', regexp: REGEXP_NAME },
      { elementId: 'second_name-reg', regexp: REGEXP_NAME },
      { elementId: 'phone-reg', regexp: REGEXP_PHONE },
      { elementId: 'password-reg', regexp: REGEXP_PASSWORD },
    );

    // Если все поля заполнены и провалидированы - отправляем запрос
    if (data) {
      AuthController.signUp(data as SignUpData)
        .then(() => new Router().go('/messages'))
        // eslint-disable-next-line no-alert
        .catch((error) => alert(`Ошибка выполнения запроса регистрации! ${error ? error.reason : ''}`));
    }
  }

  render() {
    // language=hbs
    return `
    <main class="login">
    <div class="login__wrapper">
      <div class="login__item">
                {{{ Title style='login__title' text_title='Регистрация' }}}
                <form class="registration-form__form" id="createLogin">
                    <div class="input-block">
                  
                    {{{ InputField classInput="login__input" errorText="латиница обязательно должна быть (@)" labelText="Почта:" inputId="email-reg" inputType="email" inputName="email" regexp="${REGEXP_EMAIL}" }}}
                    {{{ InputField classInput="login__input" labelText="Логин:" errorText="Должно содержать от 3 до 8 символов"  inputId="login-reg" inputType="text" inputName="login" regexp="${REGEXP_LOGIN}" }}}
                    {{{ InputField classInput="login__input"  errorText="Первая буква должна быть заглавной, без пробелов и без цифр"   labelText="Имя:" inputId="first_name-reg" inputType="text" inputName="first_name" regexp="${REGEXP_NAME}" }}}
                    {{{ InputField classInput="login__input"   errorText="Первая буква должна быть заглавной, без пробелов и без цифр"   labelText="Фамилия:" inputId="second_name-reg" inputType="text" inputName="second_name" regexp="${REGEXP_NAME}" }}}
                    {{{ InputField classInput="login__input"  errorText="от 11 до 15 символов, состоит из цифр"  labelText="Телефон:" inputId="phone-reg" inputType="tel" inputName="phone" regexp="${REGEXP_PHONE}" }}}
                    {{{ InputField classInput="login__input"  errorText="Должно содержать от 8 до 40 символов + Заглавный символ" labelText="Пароль:" errorText="Должно содержать от 8 до 40 символов + Заглавный символ" inputId="password-reg" inputType="password" inputName="password" regexp="${REGEXP_PASSWORD}" }}}

                    <div class="login__item">
                    {{{ Button buttonId="button-reg" style_btn="login__btn" value="Регистрация" onClick=onSignUp }}}
          {{{ Link style_text="login__text" text='Войти в аккаунт' href="/" }}}
          </div>
          </form>
        </div>
      </div>
      </div>
      </main>
    `;
  }
}
