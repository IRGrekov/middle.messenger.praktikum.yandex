import { renderDom } from '../../services/renderDom';
import ErrorForm from '../../components/ErrorForm';

const errorPage = new ErrorForm({
  errorNumber: 500,
  text_error: "Мы уже фиксим",
});

renderDom('#app', errorPage);
