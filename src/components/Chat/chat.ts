// import template from './button.hbs';
import Block from '../../services/Block';
import '../../pages/chats/chats.less';

export interface IChatProps {
  title: string;
  message: string;
  time: string;
  newMessages?: string;
}

interface IChat extends IChatProps {
  events: {
    click: Function,
  },
}

export class Chat extends Block<IChat> {
  constructor(props: IChatProps) {
    super({
      ...props,
      events: {
        // eslint-disable-next-line no-console
        click: () => console.log('Select chat'),
      },
    });
  }

  render() {
    // language=hbs
    return `
    <div class="chat__link">
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

                <div class="chat__notification_circle">
                <div class="chat__notification">
                    {{newMessages}}
                </div>
            </div>
        </div>

        </div>
    `;
  }
}
