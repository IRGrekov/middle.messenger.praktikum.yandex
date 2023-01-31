import Block from '../../services/Block';
import './chats.less';
import { validateInputs } from '../../services/utils';
import { REGEXP_MESSAGE } from '../../services/const';
import { IChatProps } from '../../components/Chat/chat';
import { IMessageProps } from '../../components/Message/message';

interface IChatListProps {
  chatList: IChatProps[];
  messageList: IMessageProps[];
}

interface IChatList extends IChatListProps {
  onClick: Function;
}

export class MessagesPage extends Block<IChatList> {
  constructor({ chatList, messageList }: IChatListProps) {
    super({
      chatList,
      messageList,
      onClick: () => this.validate(),
    });
  }

  validate() {
    validateInputs({ elementId: 'message', regexp: REGEXP_MESSAGE });
  }

  messageListToJSX() {
    return this.props.messageList.map((message: IMessageProps) => `{{{ Message isMyMessage=${message.isMyMessage} messageText="${message.messageText}" }}}`).join('');
  }

  chatListToJSX() {
    return this.props.chatList
      .map(
        (chat: IChatProps) => `
        {{{ Chat
        title="${chat.title}"
        message="${chat.message}"
        time="${chat.time}"
        newMessages="${chat.newMessages}"
      }}}`,
      )
      .join('');
  }
  //модальное окно1
  // <div id="meny_content" class="meny">
  // <div class="meny__content">
  //   <button id="add_user_profile" class="meny__btn">
  //     <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
  //       <line x1="5.99988" y1="0.5" x2="5.99988" y2="11.5" stroke="#3369F3" stroke-width="1.5" />
  //       <line x1="0.499878" y1="6" x2="11.4999" y2="6" stroke="#3369F3" stroke-width="1.5" />
  //     </svg>

  //   </button>
  //   <p class="meny__text">
  //     Добавить пользователя
  //   </p>
  // </div>
  // <div class="meny__content">
  //   <button id="del_user_profile" class="meny__btn">
  //     <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  //       <line x1="4.11077" y1="4.11103" x2="11.8889" y2="11.8892" stroke="#3369F3" stroke-width="1.5" />
  //       <line x1="4.11078" y1="11.8891" x2="11.889" y2="4.11093" stroke="#3369F3" stroke-width="1.5" />
  //     </svg>
  //   </button>
  //   <p class="meny__text">
  //     Удалить пользователя
  //   </p>
  // </div>
  // </div>

  //модальное окно2
  //   <div id="clip" class="clip">
  //   <div class="clip__content">
  //     <div class="clip__img">
  //       <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
  //         <path fill-rule="evenodd" clip-rule="evenodd"
  //           d="M4 1.5H18C19.3807 1.5 20.5 2.61929 20.5 4V14L14.5194 12.4052C13.5108 12.1362 12.4714 12 11.4275 12H10.5725C9.52864 12 8.48921 12.1362 7.48057 12.4052L1.5 14V4C1.5 2.61929 2.61929 1.5 4 1.5ZM0 4C0 1.79086 1.79086 0 4 0H18C20.2091 0 22 1.79086 22 4V18C22 20.2091 20.2091 22 18 22H4C1.79086 22 0 20.2091 0 18V4ZM8 6C8 7.10457 7.10457 8 6 8C4.89543 8 4 7.10457 4 6C4 4.89543 4.89543 4 6 4C7.10457 4 8 4.89543 8 6Z"
  //           fill="#3369F3" />
  //       </svg>
  //     </div>
  //     <div class="clip__text">Фото или Видео</div>
  //   </div>
  //   <div class="clip__content">
  //     <div class="clip__img">
  //       <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
  //         <path fill-rule="evenodd" clip-rule="evenodd"
  //           d="M4 1.5H18C19.3807 1.5 20.5 2.61929 20.5 4V12H16C13.7909 12 12 13.7909 12 16V20.5H4C2.61929 20.5 1.5 19.3807 1.5 18V4C1.5 2.61929 2.61929 1.5 4 1.5ZM12 22H4C1.79086 22 0 20.2091 0 18V4C0 1.79086 1.79086 0 4 0H18C20.2091 0 22 1.79086 22 4V12V18C22 20.2091 20.2091 22 18 22H12Z"
  //           fill="#3369F3" />
  //       </svg>
  //     </div>
  //     <div class="clip__text">Файл</div>
  //   </div>
  //   <div class="clip__content">
  //     <div class="clip__img">
  //       <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
  //         <path fill-rule="evenodd" clip-rule="evenodd"
  //           d="M20.5 11C20.5 16.2467 16.2467 20.5 11 20.5C5.75329 20.5 1.5 16.2467 1.5 11C1.5 5.75329 5.75329 1.5 11 1.5C16.2467 1.5 20.5 5.75329 20.5 11ZM22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11ZM11 14C12.6569 14 14 12.6569 14 11C14 9.34315 12.6569 8 11 8C9.34315 8 8 9.34315 8 11C8 12.6569 9.34315 14 11 14Z"
  //           fill="#3369F3" />
  //       </svg>
  //     </div>
  //     <div class="clip__text">Локация</div>
  //   </div>
  // </div>
  render() {
    // language=hbs
    return `
    <section class="chat">
    <div class="chat__item">
    <div class="page-container">
    <div class="chat__item">
<div class="goprofile">
<button id='' class="goprofile_btn">
<a href="/pages/profile/index.html" class="goprofile__text">Профиль</a>
<svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
 <path d="M1 9L5 5L1 1" stroke="#999999" />
</svg>
</button>
</div>
<div class="search">
  <button class="search__btn">
    <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd"
        d="M7.59239 8.41382C6.16047 9.84574 3.83886 9.84574 2.40694 8.41382C0.975017 6.9819 0.975017 4.6603 2.40694 3.22837C3.83886 1.79645 6.16047 1.79645 7.59239 3.22837C9.02431 4.6603 9.02431 6.9819 7.59239 8.41382ZM8.03277 9.79678C6.07255 11.2962 3.25696 11.1495 1.46413 9.35663C-0.488491 7.40401 -0.488491 4.23819 1.46413 2.28556C3.41675 0.332943 6.58258 0.332943 8.5352 2.28556C10.3279 4.07831 10.4747 6.89373 8.97555 8.85394L12.5423 12.4206L11.5994 13.3635L8.03277 9.79678Z"
        fill="#999999" />
    </svg>
  </button>
  <input type="text" class="search__input" placeholder="Поиск">
</div>
    <div class="chat-list">
        ${this.chatListToJSX()}
     </div>
     </div>
     <div class="chat__item">
     <div class="chat__top">
     <div class="chat__top_avatar">
       <div class="chat__top_img"></div>
       <p class="chat__top_avatar_text">Имя</p>
     </div>
     <div id="meny" class="chat__meny">
       <div class="chat__meny_point"></div>
       <div class="chat__meny_point"></div>
       <div class="chat__meny_point"></div>
     </div>
   </div>
   
   <div class="messages-container">
   ${this.messageListToJSX()}
</div>
        <div class="chat__bottom">
        <button id="4content" class="chat__bottom_icon">
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd"
      d="M6.18662 12.5L13.7628 4.92389L14.7056 5.8667L7.12943 13.4428L6.18662 12.5Z" fill="#999999" />
    <path fill-rule="evenodd" clip-rule="evenodd"
      d="M8.70067 15.0141L16.2768 7.43793L17.2196 8.38074L9.64348 15.9569L8.70067 15.0141Z" fill="#999999" />
    <path fill-rule="evenodd" clip-rule="evenodd"
      d="M14.0433 20.3567L21.6195 12.7806L22.5623 13.7234L14.9861 21.2995L14.0433 20.3567Z" fill="#999999" />
    <path fill-rule="evenodd" clip-rule="evenodd"
      d="M16.5574 22.8708L24.1335 15.2946L25.0763 16.2374L17.5002 23.8136L16.5574 22.8708Z" fill="#999999" />
    <path fill-rule="evenodd" clip-rule="evenodd"
      d="M16.5574 22.8709C13.9423 25.486 9.71181 25.4954 7.10831 22.8919C4.50482 20.2884 4.51424 16.0579 7.12936 13.4428L6.18655 12.5C3.0484 15.6381 3.0371 20.7148 6.16129 23.839C9.28549 26.9632 14.3621 26.9518 17.5003 23.8137L16.5574 22.8709Z"
      fill="#999999" />
    <path fill-rule="evenodd" clip-rule="evenodd"
      d="M21.6195 12.7806L22.5623 13.7234C25.003 11.2826 25.0118 7.3341 22.5819 4.90417C20.152 2.47424 16.2035 2.48303 13.7627 4.92381L14.7055 5.86662C16.6233 3.94887 19.7257 3.94196 21.6349 5.85119C23.5441 7.76042 23.5372 10.8628 21.6195 12.7806Z"
      fill="#999999" />
    <path fill-rule="evenodd" clip-rule="evenodd"
      d="M8.70092 15.0144C6.95751 16.7578 6.95123 19.5782 8.68689 21.3138C10.4226 23.0495 13.2429 23.0432 14.9863 21.2998L14.0435 20.357C12.8231 21.5774 10.8489 21.5818 9.63391 20.3668C8.41894 19.1518 8.42334 17.1776 9.64373 15.9572L8.70092 15.0144Z"
      fill="#999999" />
  </svg>
</button>
{{{ InputMas inputId="message" inputPlaceholder="Сообщение" inputType="text" inputName="message" regexp="^.*\\S.*$" }}}
<button class="chat__bottom_send">
  <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect y="5.19995" width="11" height="1.6" fill="white" />
    <path d="M7 1L11 6L7 11" stroke="white" stroke-width="1.6" />
  </svg>

</button>
    `;
  }
}

// <div class="page-container">
// <div class="block-left">
//     <div class="link-container">
//         <a class="link-container__link" href="../../pages/profile/index.html">Профиль ❯</a>
//     </div>

//     <div class="search-block">
//         <input type="search" placeholder="Поиск" class="form-input input-normal" />
//     </div>
//     <div class="chat-list">
//         ${this.chatListToJSX()}
//     </div>
// </div>

// <div class="block-right">
//     <div class="profile-info">
//         <div class="profile-logo">
//             <img class="profile-logo__img" src="https://help.alueducation.com/system/photos/360113168439/images.png" height="34px" width="34px" alt="logo {{title}}" />
//         </div>
//         <div class="profile-info__chat-name">
//             Александр
//         </div>
//         <div class="profile-info__settings-icon">
//             &#x2807;
//         </div>
//     </div>

//     <div class="messages-container">
//         ${this.messageListToJSX()}
//     </div>

//     <form class="send-message-block">
//         {{{ Input inputId="message" inputPlaceholder="Сообщение" inputType="text" inputName="message" regexp="^.*\\S.*$" }}}
//         <div class="button-container">
//             {{{ Button buttonId="button-send" label="Отправить" onClick=onClick }}}
//         </div>
//     </form>
// </div>
// </div>



// <div class="page-container">
// <div class="block-left">
//     <div class="link-container">
//         <a class="link-container__link" href="../../pages/profile/index.html">Профиль ❯</a>
//     </div>

//     <div class="search-block">
//         <input type="search" placeholder="Поиск" class="form-input input-normal" />
//     </div>
//     <div class="chat-list">
//         ${this.chatListToJSX()}
//     </div>
// </div>

// <div class="block-right">
//     <div class="profile-info">
//         <div class="profile-logo">
//             <img class="profile-logo__img" src="https://help.alueducation.com/system/photos/360113168439/images.png" height="34px" width="34px" alt="logo {{title}}" />
//         </div>
//         <div class="profile-info__chat-name">
//             Александр
//         </div>
//         <div class="profile-info__settings-icon">
//             &#x2807;
//         </div>
//     </div>

//     <div class="messages-container">
//         ${this.messageListToJSX()}
//     </div>

//     <form class="send-message-block">
//         {{{ Input inputId="message" inputPlaceholder="Сообщение" inputType="text" inputName="message" regexp="^.*\\S.*$" }}}
//         <div class="button-container">
//             {{{ Button buttonId="button-send" label="Отправить" onClick=onClick }}}
//         </div>
//     </form>
// </div>
// </div>
