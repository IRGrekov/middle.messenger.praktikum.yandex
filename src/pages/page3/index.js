import Handlebars from 'handlebars';
import tpl from 'bundle-text:./tpl.hbs';
import './style.scss';

Handlebars.registerPartial('page3', tpl);

export default (props = {}) => {
	return Handlebars.compile(tpl)(props);
}

window.addEventListener("click", (e) => {
	if (e.target.id !== "change_datas") {
		return;
	}
	const loginInput = document.querySelector("#login");
	console.log(loginInput.value);

	window.location.href = "./#page4"
})

window.addEventListener("click", (e) => {
	if (e.target.id !== "change_password") {
		return;
	}
	const loginInput = document.querySelector("#login");
	console.log(loginInput.value);

	window.location.href = "./#page5"
})

window.addEventListener("click", (e) => {
	if (e.target.id !== "exit_profile") {
		return;
	}
	const loginInput = document.querySelector("#login");
	console.log(loginInput.value);

	window.location.href = "./#page1"
})
window.addEventListener("click", (e) => {
	if (e.target.id !== "to_chats") {
		return;
	}
	const loginInput = document.querySelector("#login");
	console.log(loginInput.value);

	window.location.href = "./#page9"
})



