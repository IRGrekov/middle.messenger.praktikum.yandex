import Block from '../../common/Block';
import './errorForm.less';

interface IButtonProps {
  errorNumber: number;
  text_error: string;
}

export class ErrorForm extends Block {
  constructor(xx: IButtonProps) {
    console.log('xx', xx);
    super(xx);
  }
  // constructor({ errorNumber, text_error }: IButtonProps) {
  //   super({
  //     errorNumber,
  //     text_error,
  //   });
  // }

  render() {
    // language=hbs
    return `
    <div class="page-container">
    <div class="error-container">
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px" y="0px" viewBox="0 0 864 864" style="enable-background:new 0 0 864 864;" xml:space="preserve">
    <path d="M652.5,304.3c-1.6-53.7-79.6-53.7-81.2,0h-98.6v-98.6c53.7-1.6,53.7-79.6,0-81.2c-1.6-53.7-79.6-53.7-81.2,0
c-53.7,1.6-53.7,79.6,0,81.2v98.6h-98.6c-1.6-53.7-79.6-53.7-81.2,0c-53.7,1.6-53.7,79.6,0,81.2c1.6,53.7,79.6,53.7,81.2,0h98.6
v272.7c-53.7,1.6-53.7,79.6,0,81.2c1.6,53.7,79.6,53.7,81.2,0c53.7-1.6,53.7-79.6,0-81.2V385.6h98.6c1.6,53.7,79.6,53.7,81.2,0
C706.2,383.9,706.2,306,652.5,304.3z M657.2,362.4h-27.9v27.9h-34.8v-27.9H449.4v319.2h27.9v34.8h-27.9v27.9h-34.8v-27.9h-27.9
v-34.8h27.9V362.4H269.5v27.9h-34.8v-27.9h-27.9v-34.8h27.9v-27.9h34.8v27.9h145.1V182.5h-27.9v-34.8h27.9v-27.9h34.8v27.9h27.9
v34.8h-27.9v145.1h145.1v-27.9h34.8v27.9h27.9V362.4z" />
  </svg>
  <p class="error-text">
      Ошибка <b>404</b>. Не туда попали
  </p>

  <a href="/">Назад</a>
  </div>
  </div>
  `;
  }
}
