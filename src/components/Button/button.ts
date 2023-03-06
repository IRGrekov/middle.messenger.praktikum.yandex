// import template from './button.hbs';
import Block from '../../common/Block';
import '../../common/styles/styles.less';

interface IButtonProps {
  value: string;
  buttonId: string;
  style_btn: string;
  onClick: () => void;
}

export class Button extends Block {
  constructor({
    value, buttonId, style_btn, onClick,
  }: IButtonProps) {
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
    <button id={{buttonId}} class='{{style_btn}}' type="button"> {{value}} 
    </button>
    `;
  }
}
