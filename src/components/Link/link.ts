import Block from '../../common/Block';
import '../../common/styles/styles.less';
import { WithRouterProps } from '../../common/withRouter';

export interface ILinkProps extends WithRouterProps {
  href: string;
  text: string;
  style_text: string;
}

export class Link extends Block {
  constructor({
    href, text, router, style_text,
  }: ILinkProps) {
    super({
      href,
      text,
      style_text,
      events: {
        click: (e: MouseEvent) => {
          e.preventDefault();
          router.go(href);
        },
      },
    });
  }

  protected render() {
    // language=hbs
    return '<a  class="{{style_text}}" href="{{ href }}">{{ text }}</a>';
  }
}
