import { renderDom } from '../../common/renderDom';
import { ErrorForm } from '../../components/ErrorForm/errorForm';

const errorPage = new ErrorForm({
  errorNumber: 500,
  text_error: "Мы уже фиксим",
});
renderDom('#app', errorPage);
