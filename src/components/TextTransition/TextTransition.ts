// import template from './button.hbs';
import Block from '../../common/Block';
import '../../common/styles/styles.less';

interface ITextTransition {
  text: string;
  style_text: string;
  href?: string;
}

export class TextTransition extends Block {
  constructor({ text, style_text, href }: ITextTransition) {
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
