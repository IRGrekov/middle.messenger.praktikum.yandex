import { RegistrationPage } from './pages/registration/registration';
import Router from './common/Router';
import { AuthorizationPage } from './pages/authorization/authorization';
import { registerComponent } from './common/registerComponent';
import Button from './components/Button';
import Avatar from './components/Avatar';
import { Avatar_mini } from './components/Avatar_mini/avatar_mini';
import Input from './components/Input';
import InputField from './components/InputField';
import Chat from './components/Chat';
import Message from './components/Message';
import ProfilePage from './pages/profile';
import { Button_chat } from './components/Button_chat/Button_chat';
import { InputMas } from './components/InputMas/InputMas';
import { ErrorForm } from './components/ErrorForm/errorForm';
import { ProfilePage_red } from './pages/profile_red/profile';
import { Text_transition } from './components/Text_transition/Text_transition';
import { Title } from './components/Title/title';
import { Button_back } from './components/Button_back/Button_back';
// eslint-disable-next-line import/no-cycle
import MessagesPage from './pages/messages';
import { WS } from './common/Websockets';
import { InputFieldProfile } from './components/InputFieldProfile/InputFieldProfile';

registerComponent(Button, 'Button');
registerComponent(InputFieldProfile, 'InputFieldProfile');
registerComponent(Avatar, 'Avatar');
registerComponent(Button_back, 'Button_back');
registerComponent(Input, 'Input');
registerComponent(InputField, 'InputField');
registerComponent(InputMas, 'InputMas');
registerComponent(Text_transition, 'Text_transition');
registerComponent(Title, 'Title');
registerComponent(Avatar_mini, 'Avatar_mini');
registerComponent(Button_chat, 'Button_chat');

registerComponent(Chat, 'Chat');
registerComponent(Message, 'Message');

const router = new Router();
export const ws = new WS();

router.use('/', AuthorizationPage)
  .use('/sign-up', RegistrationPage)
  .use('/settings', ProfilePage)
  .use('/settings_red', ProfilePage_red)
  .use('/messenger ', MessagesPage)
  .use('/error500', ErrorForm)
  .use('/error404', ErrorForm)
  .use('/', AuthorizationPage);

router.start();
