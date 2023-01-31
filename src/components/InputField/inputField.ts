// import template from './button.hbs';
import Block from '../../services/Block';
import '../../services/styles/styles.less';

export type TInputTypeField = 'email' | 'text' | 'tel' | 'password';

interface IInputField {
  labelText?: string;
  inputId: string;
  inputType: TInputTypeField;
  inputName: string;
  inputValue?: string;
  inputPlaceholder?: string;
  regexp: string;
  classInput?: string


}

export class InputField extends Block<IInputField> {
  constructor(props: IInputField) {
    super({
      ...props,
    });
  }

  render() {
    const {
      labelText, inputId, inputType, inputName, inputValue, inputPlaceholder, regexp, classInput,
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

        </div>  


    `;
  }
}
