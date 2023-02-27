// import template from './button.hbs';
import Block from '../../common/Block';
import '../../common/styles/styles.less';

interface IButton_chatProps {
  value: string;
  buttonId: string;
  style_btn: string;
  onClick: () => void;
}

type TButton_chat = Omit<IButton_chatProps, 'onClick'> & {
  events: {
    click: Function,
  },
};

export class Button_chat extends Block<TButton_chat> {
  constructor({ value, buttonId, style_btn, onClick }: IButton_chatProps) {
    super({
      value,
      buttonId,
      style_btn,
      events: {
        click: onClick,
      },
    });
  }

  render() {
    // language=hbs
    return `

      <button class="chat__bottom_send" id={{buttonId}}  type="button">
  <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect y="5.19995" width="11" height="1.6" fill="white" />
    <path d="M7 1L11 6L7 11" stroke="white" stroke-width="1.6" />
  </svg>

</button>

    `;
  }
}
