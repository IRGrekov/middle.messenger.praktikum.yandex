import Block from '../../services/Block';
import './authorisation.less';
import { validateInputs } from '../../services/utils';
import { REGEXP_LOGIN, REGEXP_PASSWORD } from '../../services/const';

export class AuthorisationPage extends Block<{ onClick: Function }> {
  constructor() {
    super({
      // onClick: () => this.validate(),
      // goNext: 
      events: {
        submit: (e: any) => this.goNext(e),
      }
    });
  }

  goNext = (e: any) => {
    console.log("NEXT");
    e.preventDefault();
    console.log(e);

    const values = Object.fromEntries(new FormData(e.target));
    console.log(values)

    const validations = {
      //login: value => value = '^(?=.{3,20}$)([a-zA-Z0-9_-]*[a-zA-Z_-][a-zA-Z0-9_-]*)$'
      login: value => value.length >= 3 && value.length <= 20,
      password: value => value.length >= 3 && value.length <= 40,

      // password: value => value = '^(?=.*?[A-ZА-ЯЁ])(?=.*?[0-9]).{8,40}$',
      //!value.includes("@"),

    }
    let isAllValid = true;
    for (const name in values) {
      if (!validations[name](values[name])) {
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
    validateInputs({ elementId: 'login', regexp: REGEXP_LOGIN }, { elementId: 'password', regexp: REGEXP_PASSWORD });
  }

  render() {
    // language=hbs
    return `

    <main class="login">
    <div class="login__wrapper">
      <div class="login__item">
        {{{ Title style='login__title' text_title='Вход' }}}  
        <form id="loginData">
            <div class="input-block">
   
    {{{ InputField classInput="login__input" labelText="Логин:" errorText="Должно содержать от 3 до 8 символов" inputId="login" inputName="login" regexp="${REGEXP_LOGIN}" }}}
    {{{ InputField classInput="login__input" labelText="Пароль:" errorText="Должно содержать от 8 до 40 символов + Заглавный символ" inputId="password" inputType="password" inputName="password" regexp="${REGEXP_PASSWORD}"   }}}


    <div class="login__item">
      {{{ Button buttonId="button-auth"  style_btn="login__btn" value="Войти" type="submit" 
  
    
    
    }}}
    {{{ Text_transition  style_text="login__text" text='Регистрация' href="/pages/registration/index.html" }}}

    </div>
    </form>
  </div>

</div>
</main>

    `;
  }
}
// lower__title
