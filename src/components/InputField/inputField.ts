// import template from './button.hbs';
import Block from '../../common/Block';
import '../../common/styles/styles.less';

export type TInputTypeField = 'email' | 'text' | 'tel' | 'password';

interface IInputField {
  labelText?: string;
  inputId: string;
  inputType: TInputTypeField;
  inputName: string;
  inputValue?: string;
  inputPlaceholder?: string;
  regexp: string;
  classInput?: string;
  errorText: string;

}

export class InputField extends Block {
  constructor(props: IInputField) {
    super({
      ...props,
    });
  }

  render() {
    const {
      classInput, inputId, inputType, inputName, inputValue, inputPlaceholder, regexp,
    } = this.props;

    // language=hbs
    return `
    <div class="login__form">
    <label for={{inputName}} class="login__subtext">{{labelText}}</label> 
   
    {{{ Input inputId="${inputId}"
              inputType="${inputType}"
              inputName="${inputName}"
              ${inputValue !== undefined ? `inputValue="${inputValue}"` : ''}
              ${inputPlaceholder !== undefined ? `inputPlaceholder="${inputPlaceholder}"` : ''}
              regexp="${regexp}"
              class="${classInput}"
              
    }}}
    <div class="errorInput">
   {{errorText}}
    </div>

</div>   
    `;
  }
}
