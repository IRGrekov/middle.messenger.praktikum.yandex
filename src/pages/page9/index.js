import Handlebars from 'handlebars';
import tpl from 'bundle-text:./tpl.hbs';
import './style.scss';

Handlebars.registerPartial('page9', tpl);

export default (props = {}) => {
	return Handlebars.compile(tpl)(props);
}



window.addEventListener("click", (e) => {
	if (e.target.id !== "go_profile") {
		return;
	}
	const loginInput = document.querySelector("#login");
	console.log(loginInput.value);

	window.location.href = "./#page3"
})

