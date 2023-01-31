import { registerComponent } from '../../services/registerComponent';
import Button from '../../components/Button';
import { AuthorisationPage } from './authorisation';
import { renderDom } from '../../services/renderDom';
import InputField from '../../components/InputField';
import Input from '../../components/Input';
import Title from '../../components/Title';
import Text_transition from '../../components/Text_transition';

registerComponent(Button, 'Button');
registerComponent(Input, 'Input');
registerComponent(InputField, 'InputField');
registerComponent(Title, 'Title');
registerComponent(Text_transition, 'Text_transition');


const authPage = new AuthorisationPage();

renderDom('#app', authPage);

