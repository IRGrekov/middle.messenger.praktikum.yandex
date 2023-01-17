import Handlebars from 'handlebars';
import tpl from 'bundle-text:./tpl.hbs';
import './style.scss';

Handlebars.registerPartial('page1', tpl);

export default (props = {}) => {
	return Handlebars.compile(tpl)(props);
}


// const authButton = document.querySelector("#authButton");

window.addEventListener("click", (e) => {
	if (e.target.id !== "authButton") {
		return;
	}
	const loginInput = document.querySelector("#login");
	console.log(loginInput.value);
	// if (loginInput.value.length === 0) {
	// 	return
	// }

	window.location.href = "./#page10"
})

