import { registerComponent } from '../../services/registerComponent';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { renderDom } from '../../services/renderDom';
import { PasswordPage } from './password_Profile';
import InputField from '../../components/InputField';
import Title from '../../components/Title';
import InputFieldProfile from '../../components/InputFieldProfile';
import Avatar from '../../components/Avatar';
import Text_transition from '../../components/Text_transition';

registerComponent(Button, 'Button');
registerComponent(Text_transition, 'Text_transition');
registerComponent(Input, 'Input');
registerComponent(InputField, 'InputField');
registerComponent(InputFieldProfile, 'InputFieldProfile');
registerComponent(Title, 'Title');
registerComponent(Avatar, 'Avatar');

const passwordPage = new PasswordPage();

renderDom('#app', passwordPage);

