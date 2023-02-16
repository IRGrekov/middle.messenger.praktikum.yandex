// import template from './button.hbs';
import Block from '../../common/Block';
import '../../common/styles/styles.less';

interface IText_transition {
  text: string;
  style_text: string;
  href?: string;
}

type TText_transition = Omit<IText_transition, 'onClick'> & {
  events: {
    click: Function,
  },
};

export class Text_transition extends Block<TText_transition> {
  constructor({ text, style_text, href }: IText_transition
  ) {
    super({
      text,
      style_text,
      href,
    });
  }

  render() {
    // language=hbs
    return `

    <a   class="{{style_text}}" href="{{href}}" >{{text}}</a>

    `;
  }
}
