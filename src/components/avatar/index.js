import Handlebars from 'handlebars';
import tpl from 'bundle-text:./tpl.hbs';
import './style.scss';

Handlebars.registerPartial('avatar', tpl);

export default () => {
	return Handlebars.compile(tpl)({});
}

