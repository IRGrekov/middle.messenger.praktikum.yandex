import Handlebars from 'handlebars';
import tpl from 'bundle-text:./tpl.hbs';
import './style.scss';

Handlebars.registerPartial('page2', tpl);

export default (props = {}) => {
	return Handlebars.compile(tpl)(props);
}

window.addEventListener("click", (e) => {
	if (e.target.id !== "authButton1") {
		return;
	}
	const loginInput = document.querySelector("#login");
	console.log(loginInput.value);


	window.location.href = "./#page10"
})
