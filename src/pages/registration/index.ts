import { registerComponent } from '../../services/registerComponent';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { RegistrationPage } from './registration';
import { renderDom } from '../../services/renderDom';
import InputField from '../../components/InputField';
import Title from '../../components/Title';
import Text_transition from '../../components/Text_transition';

registerComponent(Button, 'Button');
registerComponent(Input, 'Input');
registerComponent(InputField, 'InputField');
registerComponent(Title, 'Title');
registerComponent(Text_transition, 'Text_transition');


const registrationPage = new RegistrationPage();

renderDom('#app', registrationPage);
