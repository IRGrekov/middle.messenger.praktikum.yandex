// import template from './button.hbs';
import Block from '../../common/Block';
import '../../common/styles/styles.less';

interface ITitle {
  text_title: string;
  style: string;
}

export class Title extends Block {
  constructor({ text_title, style }: ITitle) {
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
