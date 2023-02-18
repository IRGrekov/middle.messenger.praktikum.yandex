// import template from './button.hbs';
import Block from '../../common/Block';
import '../../common/styles/styles.less';



interface IButton_back {
  onClick: () => void;
}

type TButton = Omit<IButton_back, 'onClick'> & {
  events: {
    click: Function,
  },
};

export class Button_back extends Block<TButton_back> {
  constructor({ onClick }: IButton_back) {
    super({
      events: {
        click: () => window.location.href = "/messages",
      }

      //   blur: () => validateInput(this.props.inputId, this.props.regexp),


    },
    )
  }

  render() {
    // language=hbs
    return `
    <button class="profile__back_btn">
    <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="13" y="6.80005" width="11" height="1.6" transform="rotate(-180 13 6.80005)" fill="white" />
      <path d="M6 11L2 6L6 1" stroke="white" stroke-width="1.6" />
    </svg> 
  </button>
    `;
  }
}
