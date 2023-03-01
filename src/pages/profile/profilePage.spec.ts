import { registerComponent } from '../../common/registerComponent';
import Input from '../../components/Input';
import { InputFieldProfile } from '../../components/InputFieldProfile/InputFieldProfile';
import Button from '../../components/Button';
import { ProfilePage } from './profile';

const chai = require('chai');
chai.use(require('chai-dom'));

describe('Тест компонента ProfilePage', () => {
  registerComponent(Button, 'Button');
  registerComponent(Input, 'Input');
  registerComponent(InputFieldProfile, 'InputFieldProfile');

  const profilePage = new ProfilePage({
    email: 'email@email.com',
  });

  it('Пропс email передается в компонент ProfilePage и отображается в компоненте input email', () => {
    chai.expect(profilePage.getContent()?.querySelector('input')?.value).to.equal('email@email.com');
  });

  it('Компонент имеет класс allHtml_profile', () => {
    chai.expect(profilePage.getContent()).to.have.class('allHtml_profile');
  });

  it('Компонент содержит элемент form с классом profile-form__form', () => {
    chai.expect(profilePage.getContent()?.querySelector('form')).to.have.class('profile-form__form');
  });

  it('На форме имеется 6 элементов input', () => {
    chai.expect(profilePage.getContent()?.querySelectorAll('input')).to.have.length(6);
  });

  it('На форме имеется 6 элементов label c текстами "Почта", "Логин:", "Имя", "Фамилия", "Никнэйм", "Телефон:"', () => {
    chai.expect(profilePage.getContent()?.querySelectorAll('label')).to.have.text(['Почта:', 'Логин:', 'Имя:', 'Фамилия:', 'Никнэйм:', 'Телефон:']);
  });

});
