import Handlebars from 'handlebars';
import tpl from 'bundle-text:./tpl.hbs';
import './style.scss';

Handlebars.registerPartial('title', tpl);

export default () => {
	return Handlebars.compile(tpl)({});
}
