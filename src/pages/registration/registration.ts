import Block from '../../services/Block';
import './registration.less';
import { validateInputs } from '../../services/utils';
import {
  REGEXP_EMAIL, REGEXP_LOGIN, REGEXP_NAME, REGEXP_PASSWORD, REGEXP_PHONE,
} from '../../services/const';

export class RegistrationPage extends Block<{ onClick: Function }> {
  constructor() {
    super({
      // onClick: () => this.validate(),
      // goNext1: 
      events: {
        submit: (e: any) => this.goNext1(e),
      }
    });
  }

  goNext1 = (e: any) => {
    console.log("NEXT");
    e.preventDefault();
    console.log(e);

    const values = Object.fromEntries(new FormData(e.target));
    console.log(values)

    const validations1 = {
      login: value => value.length >= 3 && value.length <= 20,
      password: value => value.length >= 8 && value.length <= 40,
      // first_name: value => value.length >= 3,
      // second_name: value => value.length >= 3,
      // phone: value => value.length >= 3,
      //!value.includes("@"),

    }
    let isAllValid = true;
    for (const name in values) {
      if (!validations1[name](values[name])) {
        const input = e.target.querySelector(`[name="${name}"]`);
        input.style.outline = "2px solid red";
        input.classList.add("error")
        isAllValid = false;
      }
    }

    if (isAllValid) {
      location.replace("/pages/messages/index.html");
    }
  }

  validate() {
    validateInputs(
      { elementId: 'email', regexp: REGEXP_EMAIL },
      { elementId: 'login', regexp: REGEXP_LOGIN },
      { elementId: 'first_name', regexp: REGEXP_NAME },
      { elementId: 'second_name', regexp: REGEXP_NAME },
      { elementId: 'phone', regexp: REGEXP_PHONE },
      { elementId: 'password', regexp: REGEXP_PASSWORD },
    );
  }

  render() {
    // language=hbs
    return `
    <div class="login">
    <div class="login__wrapper">
      <div class="login__item">
                {{{ Title style='login__title' text_title='Регистрация' }}}
                <form id="createLogin">
                    <div class="input-block">
                        {{{ InputField classInput="login__input" labelText="Почта:" inputId="email" inputType="email" inputName="email" regexp="${REGEXP_EMAIL}" }}}
                        {{{ InputField classInput="login__input" labelText="Логин:" inputId="login" inputType="text" inputName="login" regexp="${REGEXP_LOGIN}" }}}
                        {{{ InputField classInput="login__input" labelText="Имя:" inputId="first_name" inputType="text" inputName="first_name" regexp="${REGEXP_NAME}" }}}
                        {{{ InputField classInput="login__input" labelText="Фамилия:" inputId="second_name" inputType="text" inputName="second_name" regexp="${REGEXP_NAME}" }}}
                        {{{ InputField classInput="login__input" labelText="Телефон:" inputId="phone" inputType="tel" inputName="phone" regexp="${REGEXP_PHONE}" }}}
                        {{{ InputField classInput="login__input" labelText="Пароль:" inputId="password" inputType="password" inputName="password" regexp="${REGEXP_PASSWORD}" }}}
                        <div class="login__item">
         {{{ Button buttonId="button-auth" style_btn="login__btn" value="Зарегистрироваться" type="submit" 

      onClick=onClick
    
          }}}
          {{{ Text_transition style_text="login__text" text='Войти в аккаунт' href="/pages/authorization/index.html" }}}
          </div>
          </form>
        </div>
      </div>
      </div>
      </div>

    `;
  }
}

