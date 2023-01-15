import Handlebars from 'handlebars';
import tpl from 'bundle-text:./tpl.hbs';
import './style.scss';

Handlebars.registerPartial('chat_text', tpl);

export default (id, value) => {
	return Handlebars.compile(tpl)({ id, value });
}
