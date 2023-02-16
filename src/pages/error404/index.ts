import { renderDom } from '../../common/renderDom';
import { ErrorForm } from '../../components/ErrorForm/errorForm';

const errorPage = new ErrorForm({
  errorNumber: 404,
  text_error: "Не туда попали",
});

renderDom('#app', errorPage);
