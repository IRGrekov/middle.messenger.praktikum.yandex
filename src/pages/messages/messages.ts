import Block from '../../common/Block';
import './messages.less';
import { scrollToLastMessage, validateInputs } from '../../common/utils';
import { REGEXP_MESSAGE } from '../../common/const';
import { IMessageProps } from '../../components/Message/message';
import { IChatData, store } from '../../common/Store';
import AuthController from '../../controllers/AuthController';
import Router from '../../common/Router';
import ChatController from '../../controllers/ChatController';
// eslint-disable-next-line import/no-cycle
import { ws } from '../../index';

interface IChatListProps {
  chatList?: IChatData[];
  messageList?: IMessageProps[];
}

interface IChatList extends IChatListProps {
  onClick: Function;
}

export class MessagesPage extends Block<IChatList> {
  constructor(props: IChatListProps) {
    super({
      ...props,
      onClick: (event: Event) => {
        console.log("event.target", event.target)
        if (((event.target as any).closest("button") as HTMLButtonElement).id === 'button-send-message') {
          this.onSendMessage();
        } else {
          this.onLogout();
        }
      },
      onCreateChat: () => this.createChat(),
      onDeleteChat: () => this.deleteChat(),
      onAddUser: () => this.addUserToChat(),
      onDeleteUser: () => this.removeUserFromChat(),
      getProfileInfo: () => this.getProfileInfo(),
    });
  }

  componentDidMount() {
    const router = new Router();
    ChatController.getChats().then(() => {
      AuthController.fetchUser(); // Подтягиваем информацию о юзере (нам нужен userID для работы с websocket);
    }).catch(() => {
      router.go('/signin');
    });
  }

  addUserToChat() {
    const userId = prompt('Введите ID пользователя для добавления в текущий чат');
    if (userId) {
      ChatController.addUserToChat(store.getState().currentChatId, +userId)
        .then(() => alert('Пользователь успешно добавлен!'))
        .catch((error) => alert(`Ошибка выполнения запроса! ${error ? error.reason : ''}`));
    } else {
      alert('Поле не должно быть пустым!');
    }
  }

  removeUserFromChat() {
    const userId = prompt('Введите ID пользователя для удаления из текущего чата');
    if (userId) {
      ChatController.removeUserFromChat(store.getState().currentChatId, +userId)
        .then(() => alert('Пользователь успешно удалён!'))
        .catch((error) => alert(`Ошибка выполнения запроса! ${error ? error.reason : ''}`));
    } else {
      alert('Поле не должно быть пустым!');
    }
  }

  createChat() {
    const chatTitle = prompt('Введите название чата');
    if (chatTitle) {
      ChatController.createChat(chatTitle)
        .then(() => ChatController.getChats())
        .catch((error) => alert(`Ошибка выполнения запроса! ${error ? error.reason : ''}`));
    } else {
      alert('Название чата не должно быть пустым!');
    }
  }

  deleteChat() {
    const result = window.confirm('Вы действительно хотите удалить этот чат?');

    if (result) {
      ChatController.deleteChat(store.getState().currentChatId)
        .then(() => {
          store.set('messageList', []);
          ChatController.getChats();
        })
        .catch((error) => alert(`Ошибка выполнения запроса! ${error ? error.reason : ''}`));
    }
  }

  getProfileInfo() {
    AuthController.fetchUser().catch((error) => alert(`Ошибка запроса данных пользователя! ${error ? error.reason : ''}`));
  }

  onSendMessage() {
    const data = validateInputs({ elementId: 'message', regexp: REGEXP_MESSAGE }) as { message: string } | undefined;
    if (data) {
      ws.sendMessage(data.message);
      scrollToLastMessage();
    }
  }

  onLogout() {
    AuthController.logout().then(() => {
      store.clearUserInfo(); // Заметаем следы ;)
      const router = new Router();
      router.go('/signin');
    }).catch((error) => alert(`Ошибка выполнения запроса /logout! ${error ? error.reason : ''}`));
  }

  messageListToJSX() {
    if (!this.props.messageList) {
      return '';
    }

    return this.props.messageList.map((message: IMessageProps) => `{{{ Message isMyMessage=${message.isMyMessage} messageText="${message.messageText}" }}}`).join('');
  }

  chatListToJSX() {
    if (!this.props.chatList) {
      return '';
    }

    return this.props.chatList
      .map((chat: IChatData) => {

        const lastMessage = !chat.last_message?.content ? undefined : `"${chat.last_message?.content}"`;
        const unreadMessagesCount = !chat.unread_count ? undefined : `"${chat.unread_count}"`;

        let lastMessageTime;
        if (chat.last_message?.time) {
          lastMessageTime = `"${new Date(chat.last_message?.time).toLocaleTimeString()}"`;
        }

        return `
          {{{ Chat
          id="${chat.id}"
          title="${chat.title}"
          message=${lastMessage}
          time=${lastMessageTime}
          unreadMessages=${unreadMessagesCount}
          }}}
        `;
      })
      .join('');
  }

  getChatTitle() {
    const chatId = store.getState()?.currentChatId;
    if (chatId) {
      const chat = store.getState()?.chatList.filter((item: IChatData) => String(item.id) === chatId);

      if (chat && chat.length > 0) {
        return chat[0].title;
      }
    }

    return undefined;
  }

  render() {
    const currentChatTitle = this.getChatTitle();

    // language=hbs
    return `
    
        <div class="messages-page-container">
            <div class="block-left">
                <div class="link-container">
                    <div class="button-chat-container">
                        {{{ Button buttonId="button-create-chat" style_btn="profile__btn" value="Создать чат" onClick=onCreateChat }}}
                        ${currentChatTitle ? `
                        {{{ Button buttonId="button-add-user" style_btn="profile__btn" value="Пригласить" onClick=onAddUser }}}
                        {{{ Button buttonId="button-delete-user" style_btn="profile__btn" value="Исключить" onClick=onDeleteUser }}}
                      ` : ''}
                    </div>
                  
                    {{{ Text_transition  style_text="login__text" text='Профиль' href="/profile" }}}
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

            <div class="block-right">
                <div class="profile-info">
                    <div class="profile-logo">
                        ${currentChatTitle ? `
                            
                             {{title}}
                            ` : ''}
                    </div>
                    <div class="profile-info__chat-name">
                        ${currentChatTitle || 'Выберите чат'}
                        ${currentChatTitle ? '{{{ Button buttonId="button-delete-chat"  style_btn="profile__btn" value="Удалить" onClick=onDeleteChat }}}' : ''}
                    </div>
                    <div class="profile-info__settings-icon">
                        {{{ Button buttonId="button-logout"  style_btn="profile__btn" value="Выход" onClick=onClick }}}
                    </div>
                </div>

                <div class="messages-container">
                    ${this.messageListToJSX()}
                </div>
                
                <form class="send-message-block" onSubmit="return false;">
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
                    <div class="button-container">
                        ${currentChatTitle ? '{{{ Button_chat buttonId="button-send-message" label="Отправить" onClick=onClick }}}' : ''}
                    </div>
                </form>
            </div>
        </div>
    `;
  }
}
