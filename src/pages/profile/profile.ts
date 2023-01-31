import './profile.less';
import { validateInputs } from '../../services/utils';
import {
  REGEXP_EMAIL, REGEXP_LOGIN, REGEXP_NAME, REGEXP_NICKNAME, REGEXP_PHONE,
} from '../../services/const';
import Block from '../../services/Block';

interface IProfileProps {
  email: string;
  login: string;
  firstName: string;
  secondName: string;
  displayName: string;
  phone: string;
}

interface IProfile extends IProfileProps {
  onClick: Function;
}

export class ProfilePage extends Block<IProfile> {
  constructor(props: IProfileProps) {
    super({
      ...props,
      onClick: (event: Event) => {
        if ((event.target as HTMLButtonElement).id === 'button-save') {
          this.validate();
        }
      },
      
      openModal: () => {
        console.log(">>>>> openModal");
        const modalWindow = document.querySelector("#profilemodal");
        modalWindow?.classList.remove("hfbdjfhwegblfjhegragwbJYGERAYI");

      },
      
    });

  }

  validate() {
    validateInputs(
      { elementId: 'email', regexp: REGEXP_EMAIL },
      { elementId: 'login', regexp: REGEXP_LOGIN },
      { elementId: 'first_name', regexp: REGEXP_NAME },
      { elementId: 'second_name', regexp: REGEXP_NAME },
      { elementId: 'display_name', regexp: REGEXP_NICKNAME },
      { elementId: 'phone', regexp: REGEXP_PHONE },
    );
  }

  render() {
    const {
      email, login, firstName, secondName, displayName, phone,
    } = this.props;

    // language=hbs
    return `
    <div class='allHtml'>
    <div id="profilemodal" class="profilemodal">
    <div class="profilemodal__wrapperr">
      <div class="form__update">
        {{{ Title  style='login__title' text_title='Загрузите файл' }}}
        {{{ Text_transition href='' style_text='form__new-img' text='Выбрать файл на компьютере' }}}
        {{{ Button buttonId="buttonProfileAvatar"  style_btn='someBtn' value='Поменять' onClick=openModal }}}
      </div>
    </div>
  </div>
      
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
  
              {{{ InputFieldProfile classInput="profile__input" inputValue="${email}" labelText="Почта:" inputId="email" inputType="email"
                             inputName="email" regexp="${REGEXP_EMAIL}" }}}
  
              {{{ InputFieldProfile classInput="profile__input" inputValue="${login}" labelText="Логин:" inputId="login" inputType="text"
                             inputName="login" regexp="${REGEXP_LOGIN}" }}}
  
              {{{  InputFieldProfile classInput="profile__input" inputValue="${firstName}" labelText="Имя:" inputId="first_name" inputType="text" 
                             inputName="first_name" regexp="${REGEXP_NAME}" }}}
  
              {{{  InputFieldProfile classInput="profile__input" inputValue="${secondName}" labelText="Фамилия:" inputId="second_name" inputType="text"
                             inputName="second_name" regexp="${REGEXP_NAME}" }}}
  
              {{{  InputFieldProfile classInput="profile__input" inputValue="${displayName}" labelText="Имя в чате:" inputId="display_name" inputType="text"
                             inputName="display_name" regexp="${REGEXP_NICKNAME}" }}}
  
              {{{  InputFieldProfile classInput="profile__input" inputValue="${phone}" labelText="Телефон:" inputId="phone" inputType="tel"
                             inputName="phone" regexp="${REGEXP_PHONE}" }}}

                             <div class="profile__redact">
 <div class="profile__transition">
                  {{{ Button buttonId="button-save" style_btn="profile__btn" value="Сохранить" class="profile__btn" onClick=onClick }}}
                  </div>
                  <div class="profile__transition">
                  {{{ Button buttonId="button-cancel" style_btn="profile__btn" value="Сменить пароль" onClick=onClick }}}
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
// {{{ Avatar }}}
// <div class="page-container">
// <div class="profile-settings">
//     <div class="profile-form">
//         {{{ Title style='profile__title' text_title='Настройка профиля' }}}  
    
//         <form class="profile-form__form">
//             <div class="input-block">

//             {{{ InputFieldProfile classInput="profile__input" inputValue="${email}" labelText="Почта:" inputId="email" inputType="email"
//                            inputName="email" regexp="${REGEXP_EMAIL}" }}}

//             {{{ InputFieldProfile classInput="profile__input" inputValue="${login}" labelText="Логин:" inputId="login" inputType="text"
//                            inputName="login" regexp="${REGEXP_LOGIN}" }}}

//             {{{  InputFieldProfile classInput="profile__input" inputValue="${firstName}" labelText="Имя:" inputId="first_name" inputType="text" 
//                            inputName="first_name" regexp="${REGEXP_NAME}" }}}

//             {{{  InputFieldProfile classInput="profile__input" inputValue="${secondName}" labelText="Фамилия:" inputId="second_name" inputType="text"
//                            inputName="second_name" regexp="${REGEXP_NAME}" }}}

//             {{{  InputFieldProfile classInput="profile__input" inputValue="${displayName}" labelText="Никнэйм:" inputId="display_name" inputType="text"
//                            inputName="display_name" regexp="${REGEXP_NICKNAME}" }}}

//             {{{  InputFieldProfile classInput="profile__input" inputValue="${phone}" labelText="Телефон:" inputId="phone" inputType="tel"
//                            inputName="phone" regexp="${REGEXP_PHONE}" }}}

//                 <nav class="nav-block">
//                     <a class="nav-block__link" href="../password/index.html">Сменить пароль</a>
//                 </nav>
//             </div>

//             <div class="button-block">
//                 {{{ Button buttonId="button-save" value="Сохранить" onClick=onClick }}}
//                 {{{ Button buttonId="button-cancel" value="Отмена" onClick=onClick }}}
//             </div>

//         </form>
//     </div>

// </div>
// </div>







// <div class="page-container">
// <div class="profile-settings">
//     <div class="profile-form">
//         <h2 class="profile-form__title">Настройки</h2>

//         <form class="profile-form__form">
//             <div class="input-block">

//             {{{ InputField inputValue="${email}" labelText="Почта:" inputId="email" inputType="email"
//                            inputName="email" regexp="${REGEXP_EMAIL}" }}}

//             {{{ InputField inputValue="${login}" labelText="Логин:" inputId="login" inputType="text"
//                            inputName="login" regexp="${REGEXP_LOGIN}" }}}

//             {{{ InputField inputValue="${firstName}" labelText="Имя:" inputId="first_name" inputType="text" 
//                            inputName="first_name" regexp="${REGEXP_NAME}" }}}

//             {{{ InputField inputValue="${secondName}" labelText="Фамилия:" inputId="second_name" inputType="text"
//                            inputName="second_name" regexp="${REGEXP_NAME}" }}}

//             {{{ InputField inputValue="${displayName}" labelText="Никнэйм:" inputId="display_name" inputType="text"
//                            inputName="display_name" regexp="${REGEXP_NICKNAME}" }}}

//             {{{ InputField inputValue="${phone}" labelText="Телефон:" inputId="phone" inputType="tel"
//                            inputName="phone" regexp="${REGEXP_PHONE}" }}}

//                 <nav class="nav-block">
//                     <a class="nav-block__link" href="../password/index.html">Сменить пароль</a>
//                 </nav>
//             </div>

//             <div class="button-block">
//                 {{{ Button buttonId="button-save" label="Сохранить" onClick=onClick }}}
//                 {{{ Button buttonId="button-cancel" label="Отмена" onClick=onClick }}}
//             </div>

//         </form>
//     </div>
//     <div class="avatar">
//         <input type="image" name="avatar" src="${imagePath}" alt="avatar" />
//     </div>
// </div>
// </div>
