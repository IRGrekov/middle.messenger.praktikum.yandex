import Block from '../../common/Block';
import '../../common/styles/styles.less';
import { validateInput } from '../../common/utils';

export type TInputTypeMas = 'email' | 'text' | 'tel' | 'password';

interface IInputProps {
  inputId: string;
  inputValue?: string;
  inputPlaceholder?: string;
  inputType: TInputTypeMas;
  inputName: string;
  className?: string;
  regexp: string;
}

export class InputMas extends Block {
  constructor(props: IInputProps) {
    super({
      ...props,
      events: {
        focus: () => validateInput(this.props.inputId as string, this.props.regexp as string),
        blur: () => validateInput(this.props.inputId as string, this.props.regexp as string),
      },
    });
  }

  render() {
    // language=hbs
    return `
      <input class ="chat__bottom_input "id={{inputId}}
             ${this.props.inputValue !== undefined && 'value={{inputValue}}'}
             ${this.props.inputPlaceholder !== undefined && 'placeholder={{inputPlaceholder}}'}
             type={{inputType}} name={{inputName}}
             class="form-input"
             autocomplete="false"/>
    `;
  }
}
