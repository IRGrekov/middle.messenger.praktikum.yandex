import Block from '../../services/Block';
import '../../services/styles/styles.less';
import { validateInput } from '../../services/utils';

export type TInputTypeMas = 'email' | 'text' | 'tel' | 'password';

interface IInputPropsMas {
  inputId: string;
  inputValue?: string;
  inputPlaceholder?: string;
  inputType: TInputTypeMas;
  inputName: string;
  className?: string;
  regexp: string;
}

interface IInputMas extends IInputPropsMas {
  events: {
    focus: Function;
    blur: Function;
  }
}

export class InputMas extends Block<IInputMas> {
  constructor(props: IInputPropsMas) {
    super({
      ...props,
      events: {
        focus: () => validateInput(this.props.inputId, this.props.regexp),
        blur: () => validateInput(this.props.inputId, this.props.regexp),
      },
    });
  }

  render() {
    // language=hbs
    return `
      <input id={{inputId}}
             ${this.props.inputValue !== undefined && 'value={{inputValue}}'}
             ${this.props.inputPlaceholder !== undefined && 'placeholder={{inputPlaceholder}}'}
             type={{inputType}} name={{inputName}}
             class="chat__bottom_input "
             autocomplete="false"/>
    `;
  }
}
