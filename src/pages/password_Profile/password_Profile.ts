import './password_Profile.less';
import { validateInputs } from '../../services/utils';
import { REGEXP_PASSWORD } from '../../services/const';
import Block from '../../services/Block';

export class PasswordPage extends Block<{ onClick: Function }> {
  constructor() {
    super({
      onClick: (event: Event) => {
        if ((event.target as HTMLButtonElement).id === 'button-save') {
          this.validate();
        }
      },
    });
  }

  validate() {
    validateInputs({ elementId: 'oldPassword', regexp: REGEXP_PASSWORD }, { elementId: 'newPassword', regexp: REGEXP_PASSWORD });
  }

  render() {
    // language=hbs
    return `
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

  {{{ Title style='profile__title' text_title='Сменить пароль' }}}  
  <div class="profile__form_wrapper">
  <form class="profile-form__form">

  {{{ InputFieldProfile  classInput="profile__input" labelText="Текущий пароль:" inputId="oldPassword" inputType="password"
  inputName="oldPassword" regexp="${REGEXP_PASSWORD}" }}}
  {{{ InputFieldProfile  classInput="profile__input" labelText="Новый пароль:" inputId="newPassword" inputType="password"
  inputName="newPassword" regexp="${REGEXP_PASSWORD}" }}}  

                     <div class="profile__redact">
<div class="profile__transition">
          {{{ Button buttonId="button-save" style_btn="profile__btn" value="Сохранить" class="profile__btn" onClick=onClick }}}
          </div>

          <div class="profile__transition">
          {{{ Button buttonId="button-cancel" style_btn="profile__btn" value="Выйти" onClick=onClick }}}
          </div>
          
          </div>
          </form>
        </div>
      </div>
      </div>

    `;
  }
}
// <div class="page-container">
// <div class="password-form">
//     <h2 class="password-form__title">Сменить пароль</h2>

//     <form class="password-form__form">
//         <div class="input-block">
//             {{{ InputField labelText="Текущий пароль:" inputId="oldPassword" inputType="password"
//                            inputName="oldPassword" regexp="${REGEXP_PASSWORD}" }}}
//             {{{ InputField labelText="Новый пароль:" inputId="newPassword" inputType="password"
//                            inputName="newPassword" regexp="${REGEXP_PASSWORD}" }}}  
//         </div>

//         <div class="button-block">
//             {{{ Button buttonId="button-save" label="Сохранить" onClick=onClick }}}
//             {{{ Button buttonId="button-cancel" label="Отмена" onClick=onClick }}}
//         </div>
//     </form>
// </div>
// </div>
