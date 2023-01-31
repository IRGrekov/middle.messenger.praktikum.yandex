import { renderDom } from '../../services/renderDom';
import ErrorForm from '../../components/ErrorForm';

const errorPage = new ErrorForm({
  errorNumber: 500,
  errorPicturePath: 'https://auho.ru/sites/default/files/3_745.jpg',
});

renderDom('#app', errorPage);
