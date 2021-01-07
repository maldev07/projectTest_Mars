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

   const formAction = document.querySelector('form.add'),
      inputAction = document.querySelector('.adding__input'),
      checkAction = document.querySelector('[type="checkbox"]'),
      movieList = document.querySelector('.promo__interactive-list');
   addNewFilmList(movieDB.movies, movieList);

   formAction.addEventListener('submit', (event) => {
      event.preventDefault();
      let newFilm = inputAction.value;
      const isChecked = checkAction.checked;
      inputAction.value = '';

      if (newFilm) {
         if (newFilm.length > 21) {
            newFilm = `${newFilm.substring(0, 22)}...`;
         }

         movieDB.movies.push(newFilm);
         sortArr(movieDB.movies);
         addNewFilmList(movieDB.movies, movieList, isChecked);
      } else {
         alert('ERROR');
      }

      event.target.reset();
   });





   function addNewFilmList(films, list, isChecked) {
      list.innerHTML = '';
      sortArr(films);

      films.forEach((item, i) => {
         list.innerHTML += `<li class="promo__interactive-item">${i + 1}-${item} 
         <div class="delete"></div></li>`;
      });
      if (isChecked) {
         console.log('Добавляем любимый фильм!');
      }
      document.querySelectorAll('.delete').forEach((btn, i) => {
         btn.addEventListener('click', () => {
            btn.parentElement.remove();
            movieDB.movies.splice(i, 1);
            addNewFilmList(films, list, isChecked);
         });
      });
   }

   function sortArr(arr) {
      arr.sort();
   }


});