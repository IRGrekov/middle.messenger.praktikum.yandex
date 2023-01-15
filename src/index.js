import Handlebars from "handlebars";
import tpl from 'bundle-text:./index.hbs';
import './style.css';
import './components/button';
import './components/line_button';
import './components/button_search';
import './components/button_to-profile';
import './components/button_add-content';
import './components/inputform';
import './components/inputform_profile';
import './components/chat_profile';
import './components/chat_footer-content';
import './components/chat_element';
import './components/chat_text';
import './components/chat_img';
import './components/title';
import './components/text _transition';
import './components/avatar';
import './pages/page1';
import './pages/page2';
import './pages/page3';
import './pages/page4';
import './pages/page5';
import './pages/page6';
import './pages/page7';
import './pages/page9';
import './pages/page10';
import './pages/page404';
import './pages/page500';


console.log(tpl);

const comp = Handlebars.compile(tpl);
const res = comp({
	fname: 'students',
});

document.getElementById('root').innerHTML = res;

window.location.href = "./#page1"


document.querySelector(".profile__circle").addEventListener("click", () => {
	document.getElementById("profilemodal").classList.add("profilemodal_open")
})
document.querySelector(".profilemodal__wrapperr").addEventListener("click", () => {
	document.getElementById("profilemodal").classList.remove("profilemodal_open")
})


document.querySelector(".chat__meny").addEventListener("click", () => {
	document.getElementById("meny_content").classList.toggle("meny_show")
})

document.querySelector(".chat__bottom_icon").addEventListener("click", () => {
	document.getElementById("clip").classList.toggle("show_clip")
})
document.querySelector("#add_user_profile").addEventListener("click", () => {
	document.getElementById("add_user_form").classList.add("show_clip")
})
document.querySelector("#remove_user_form").addEventListener("click", () => {
	document.getElementById("add_user_form").classList.remove("show_clip")
})
document.querySelector("#del_user_profile").addEventListener("click", () => {
	document.getElementById("dell_user_form").classList.add("show_clip")
})
document.querySelector("#remove_user_form_update").addEventListener("click", () => {
	document.getElementById("dell_user_form").classList.remove("show_clip")
})