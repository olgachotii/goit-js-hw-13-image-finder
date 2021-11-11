import './sass/main.scss';
import gatePage from './js/apiService.js';
import cards from './templates/cards.hbs';

const refs = {
  gallery: document.querySelector('.gallery'),
  input: document.querySelector('.input'),
  formButton: document.querySelector('.form__button'),
};

refs.formButton.addEventListener('click', onClickForm);

function onClickForm(e) {
  e.preventDefault();
  const whatToSearch = refs.input.value;

  gatePage(whatToSearch).then(renderGalery);
}

function renderGalery(card) {
  return (refs.gallery.innerHTML = cards(card.hits));
}
