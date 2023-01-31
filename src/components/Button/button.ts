// import template from './button.hbs';
import Block from '../../services/Block';
import '../../services/styles/styles.less';

interface IButtonProps {
  value: string;
  type: string;
  style_btn: string;
  buttonId: string;
  onClick: () => void;
}


type TButton = Omit<IButtonProps, 'onClick'> & {
  events: {
    click: Function,
  },
}


export class Button extends Block<TButton> {
  constructor({ value, buttonId, type, style_btn, onClick }: IButtonProps) {
    super({
      value,
      buttonId,
      type,
      style_btn,
      events: {
        click: onClick,
      },
    })
  }

  render() {
    // language=hbs
    return `
      <button 
      id="{{buttonId}}" type="{{type}}" class=" {{style_btn}}">{{value}} 
      </button>   `;
  }
}
