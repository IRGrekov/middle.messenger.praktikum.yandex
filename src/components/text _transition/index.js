import Handlebars from 'handlebars';
import tpl from 'bundle-text:./tpl.hbs';
import './style.scss';

Handlebars.registerPartial('text__transition', tpl);

export default () => {
	return Handlebars.compile(tpl)({});
}
