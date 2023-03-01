import { AuthorizationPage } from './authorization';
import { registerComponent } from '../../common/registerComponent';
import Input from '../../components/Input';
import InputField from '../../components/InputField';
import Button from '../../components/Button';

const chai = require('chai');
chai.use(require('chai-dom'));

describe('Тест компонента AuthorizationPage', () => {
  registerComponent(Button, 'Button');
  registerComponent(Input, 'Input');
  registerComponent(InputField, 'InputField');

  const authPage = new AuthorizationPage();

  it('Компонент имеет класс login', () => {
    chai.expect(authPage.getContent()).to.have.class('login');
  });

  it('Компонент содержит элемент form с классом authorisation-form__form', () => {
    chai.expect(authPage.getContent()?.querySelector('form')).to.have.class('authorisation-form__form');
  });

  it('На форме имеется 2 элемента Input', () => {
    chai.expect(authPage.getContent()?.querySelectorAll('Input')).to.have.length(2);
  });

  it('На форме имеется 2 элемента label c текстами "Логин:" и "Пароль:"', () => {
    chai.expect(authPage.getContent()?.querySelectorAll('label')).to.have.text(['Логин:', 'Пароль:']);
  });
});
