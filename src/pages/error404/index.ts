import { renderDom } from '../../services/renderDom';
import ErrorForm from '../../components/ErrorForm';

const errorPage = new ErrorForm({
  errorNumber: 404,
  text_error: "Не туда попали",
});

renderDom('#app', errorPage);
