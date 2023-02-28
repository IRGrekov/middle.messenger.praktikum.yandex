// import template from './button.hbs';
import Block from '../../common/Block';
import '../../common/styles/styles.less';

export type TInputTypeProfile = 'email' | 'text' | 'tel' | 'password';

interface IInputFieldProfile {
  labelText?: string;
  inputId: string;
  inputType: TInputTypeProfile;
  inputName: string;
  inputValue?: string;
  inputPlaceholder?: string;
  regexp: string;
  classInput: string;

}

export class InputFieldProfile extends Block {
  constructor(props: IInputFieldProfile) {
    super({
      ...props,
    });
  }

  render() {
    const {
      inputId, inputType, inputName, inputValue, inputPlaceholder, regexp, classInput,
    } = this.props;

    // language=hbs
    return `
    <div class="profile__form">
    <label for={{inputName}} class="profile__subtext">{{labelText}}</label> 
   
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
