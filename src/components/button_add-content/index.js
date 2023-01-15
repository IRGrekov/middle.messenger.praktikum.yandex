import Handlebars from 'handlebars';
import tpl from 'bundle-text:./tpl.hbs';
import './style.scss';

Handlebars.registerPartial('button_add-content', tpl);

export default (id, value) => {
	return Handlebars.compile(tpl)({ id, value });
}
