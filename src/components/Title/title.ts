// import template from './button.hbs';
import Block from '../../services/Block';
import '../../services/styles/styles.less';

interface ITitle {
  text_title: string;
  style: string;
}

type TTitle = Omit<ITitle, 'onClick'> & {
  events: {
    click: Function,
  },
};

export class Title extends Block<TTitle> {
  constructor({ text_title, style }: ITitle
  ) {
    super({
      text_title,
      style,
    });
  }

  render() {
    // language=hbs
    return `
    <p class=" {{style}}">{{text_title}}</p>
    `;
  }
}
