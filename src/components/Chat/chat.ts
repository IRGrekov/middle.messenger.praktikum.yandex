// import template from './button.hbs';
import Block from '../../common/Block';
import '../../pages/messages/messages.less';
import { getParentDataSetParam, scrollToLastMessage } from '../../common/utils';
import { store } from '../../common/Store';
import ChatController from '../../controllers/ChatController';
import { ws } from '../../index';

export interface IChatProps {
  id: string;
  title: string;
  message: string;
  time: string;
  unreadMessages: string;
  avatar: string;
}

interface IChat extends IChatProps {
  events: {
    click: Function;
  };
}

export class Chat extends Block<IChat> {
  constructor(props: IChatProps) {
    super({
      ...props,
      events: {
        click: (e: PointerEvent) => this.setCurrentChatId(e),
      },
    });
  }

  async setCurrentChatId(e: PointerEvent) {
    const id = getParentDataSetParam(e.target as HTMLElement, 'chat-item', 'id');
    if (id) {
      store.set('currentChatId', id);
      const chatUsers = await ChatController.getChatUsers(id);
      // eslint-disable-next-line no-console
      console.log(`Чат ${id}, пользователи: `, chatUsers);
      ws.connect(); // Создаем подключение по Websocket
    } else {
      scrollToLastMessage();
    }
  }

  render() {
    const activeChatBorder = store.getState().currentChatId === this.props.id ? 'style="background: #92bdff"' : '';

    // language=hbs
    return `
    <div class="chat-item" data-id={{id}} ${activeChatBorder}>
    <div class="chat__link_hover"></div>
    <div class="chat__link_item">
    <div class="chat__link_circle">
    <img class="chat-logo-img"/>
      </div>
      </div>
      <div class="chat__link_item">
      <label for="" class="chat__text">
                {{title}}
                </label>
                <label for="" class="chat__subtext">
                {{message}}
                </label>
                </div>

                <div class="chat__link_item">
                <div class="chat__date">
                {{time}}
            </div>
        </div>
    `;
  }
}
