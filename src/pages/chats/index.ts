import { registerComponent } from '../../services/registerComponent';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { MessagesPage } from './chats';
import { renderDom } from '../../services/renderDom';
import Chat from '../../components/Chat';
import Message from '../../components/Message';
import InputField from '../../components/InputField';
import Title from '../../components/Title';
import Text_transition from '../../components/Text_transition';
import InputMas from '../../components/InputMas';


registerComponent(Text_transition, 'Text_transition');
registerComponent(InputField, 'InputField');
registerComponent(InputMas, 'InputMas');
registerComponent(Title, 'Title');
registerComponent(Button, 'Button');
registerComponent(Input, 'Input');
registerComponent(Chat, 'Chat');
registerComponent(Message, 'Message');

const chatsPage = new MessagesPage({
  messageList: [
    {
      isMyMessage: true,
      messageText: 'Создайте в Git ветку sprint_2. Не меняйте её название, в ней вы будете выполнять задания этого спринта.',
      messageDate: '30.01.2022',
      messageTime: '14:08:31',
    },
    {
      isMyMessage: false,
      messageText: 'Внедрите TypeScript.',
      messageDate: '30.01.2022',
      messageTime: '14:09:20',
    },
    {
      isMyMessage: true,
      messageText: 'Сделайте страницу со списком чатов и лентой переписки. Не забудьте, что поле ввода сообщения должно называться message.',
      messageDate: '30.01.2022',
      messageTime: '14:09:41',
    },
    {
      isMyMessage: false,
      messageText: 'Добавьте компонентный подход в проект Используйте реализацию блока и Event Bus; Разделите проект на папки с компонентами и страницами (components и blocks или pages).',
      messageDate: '30.01.2022',
      messageTime: '14:10:05',
    },
    {
      isMyMessage: true,
      messageText: 'Сделайте сбор данных из формы. В console.log должен выводиться объект со всеми заполненными полями формы.',
      messageDate: '30.01.2022',
      messageTime: '14:10:51',
    },
    {
      isMyMessage: true,
      messageText: 'Генерация страниц должна происходить на стороне клиента;',
      messageDate: '30.01.2022',
      messageTime: '14:08:31',
    },
    {
      isMyMessage: false,
      messageText: 'Сборка должна быть при помощи Parcel;',
      messageDate: '30.01.2022',
      messageTime: '14:09:20',
    },

  ],
  chatList: [
    {
      title: 'Андрей ',
      message: 'Изображение',
      time: '10:49',
      newMessages: '2',
    },
    {
      title: 'Киноклуб ',
      message: 'Вы: стикер',
      time: '12:00',
      newMessages: '',
    },
    {
      title: 'Илья ',
      message: 'Друзья, у меня для вас особенный выпуск новостей!...',
      time: '15:12',
      newMessages: '4',

    },
    {
      title: 'тет-а-теты ',
      message: 'И Human Interface Guidelines и Material Design рекомендуют...',
      time: 'ср',
      newMessages: '',
    },
    {
      title: '1, 2, 3',
      message: 'В 2008 году художник Jon Rafman  начал собирать...',
      time: '12   ',
      newMessages: '2',
    },
    {
      title: 'Чат о погоде',
      message: 'Так увлёкся работой по курсу, что совсем забыл его анонсир...',
      time: '1 ',
      newMessages: '',
    },
    {
      title: 'Андрей ',
      message: 'Изображение',
      time: '10:49',
      newMessages: '2',
    },
    {
      title: 'Киноклуб ',
      message: 'Вы: стикер',
      time: '12:00',
      newMessages: '',
    },
    {
      title: 'Илья ',
      message: 'Друзья, у меня для вас особенный выпуск новостей!...',
      time: '15:12',
      newMessages: '4',

    },
    {
      title: 'тет-а-теты ',
      message: 'И Human Interface Guidelines и Material Design рекомендуют...',
      time: 'ср',
      newMessages: '',
    },
    {
      title: '1, 2, 3',
      message: 'В 2008 году художник Jon Rafman  начал собирать...',
      time: '12   ',
      newMessages: '2',
    },
    {
      title: 'Чат о погоде',
      message: 'Так увлёкся работой по курсу, что совсем забыл его анонсир...',
      time: '1 ',
      newMessages: '',
    },
  ],
});

renderDom('#app', chatsPage);

setTimeout(() => {
  const collection = document.getElementsByClassName('messages-container');
  if (collection.length) {
    collection[0].scrollTo({
      top: collection[0].scrollHeight,
      behavior: 'smooth',
    });
  }
}, 500);
