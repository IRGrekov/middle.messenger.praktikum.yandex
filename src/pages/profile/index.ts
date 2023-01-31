import { registerComponent } from '../../services/registerComponent';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { renderDom } from '../../services/renderDom';
import { ProfilePage } from './profile';
import InputField from '../../components/InputField';
import Title from '../../components/Title';
import Avatar from '../../components/Avatar';
import Text_transition from '../../components/Text_transition';
import InputFieldProfile from '../../components/InputFieldProfile';

registerComponent(Button, 'Button');
registerComponent(Text_transition, 'Text_transition');
registerComponent(Input, 'Input');
registerComponent(InputField, 'InputField');
registerComponent(Title, 'Title');
registerComponent(Avatar, 'Avatar');
registerComponent(InputFieldProfile, 'InputFieldProfile');



const profilePage = new ProfilePage({
  email: 'gfp_man@yandex.ru',
  login: 'myLogin',
  firstName: 'Георгий',
  secondName: 'Иванов',
  displayName: 'Гоша',
  phone: '+79999999999',
  imagePath: 'https://previews.123rf.com/images/denizjdazel/denizjdazel1902/denizjdazel190200045/124841367-.jpg?fj=1',
});

renderDom('#app', profilePage);
