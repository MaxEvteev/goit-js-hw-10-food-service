import menuTemplate from '../templates/menu';
import menu from '../menu';

const refs = {
    body: document.querySelector("body"),
    menuList: document.querySelector(".js-menu"),
    input: document.querySelector("#theme-switch-toggle")
};
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
refs.body.classList.add(localStorage?.getItem("theme") || Theme.LIGHT);
if (localStorage.getItem("theme") === Theme.DARK) {
    refs.input.checked = true;
};

function createMenuMarkup(menu) {
    return menu.map(menuTemplate).join('')
};
function onChangeTheme(e) {
    if (e.target.checked) {
        refs.body.classList.add(Theme.DARK)
        refs.body.classList.remove(Theme.LIGHT)

        localStorage.setItem('theme', Theme.DARK)
    } else {
        refs.body.classList.add(Theme.LIGHT)
        refs.body.classList.remove(Theme.DARK)
        localStorage.setItem('theme', Theme.LIGHT)
    }
}

const menuMarkup = createMenuMarkup(menu);

refs.menuList.innerHTML = menuMarkup;

refs.input.addEventListener('change', onChangeTheme);
