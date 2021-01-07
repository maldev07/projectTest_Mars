/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';
const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

document.addEventListener('DOMContentLoaded', () => {

    //1
    const adv = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        promoGenre = poster.querySelector('.promo__genre'),
        interectiveList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkBox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const newFilm = addInput.value;
        const favourite = checkBox.checked;
        if (newFilm) {
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);

            createMovieList(movieDB.movies, interectiveList);

            event.target.reset();
        } else {
            alert('eror');
        }
    });

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };
    //2
    const makeChange = () => {
        promoGenre.textContent = 'Драма';
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    //4
    function createMovieList(films, parent) {
        parent.innerHTML = '';
        films.forEach((film, i) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1} - ${film}
                <div class="delete"></div>
            </li>
            `;
        });
    }
    deleteAdv(adv);
    makeChange();
    sortArr(movieDB.movies);
    createMovieList(movieDB.movies, interectiveList);




});