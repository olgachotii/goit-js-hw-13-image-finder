import './sass/main.scss';
import NewApiService from './js/apiService.js';
import cards from './templates/cards.hbs';

import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/src/styles/main.scss';

import { pnotifyError, pnotifyAlert } from './js/allert';

const refs = {
  gallery: document.querySelector('.gallery'),
  searchForm: document.querySelector('.search-form'),
  loadMoreBtn: document.querySelector('.load-more'),
};

const newApiService = new NewApiService();

refs.searchForm.addEventListener('submit', onClickForm);
refs.loadMoreBtn.addEventListener('click', onLoadMore);
refs.gallery.addEventListener('click', runShow);

function onClickForm(e) {
  e.preventDefault();

  clearGallery();
  newApiService.query = e.currentTarget.elements.query.value;
  if (newApiService.query === '') {
    return pnotifyError();
  }
  newApiService.resetPage();
  newApiService.gatePage().then(renderGalery);
}

function onLoadMore() {
  newApiService.gatePage().then(renderGalery);
}

function renderGalery(card) {
  if (card.length > 11) {
    refs.loadMoreBtn.classList.remove('is-hidden');
  } else {
    refs.loadMoreBtn.classList.add('is-hidden');
    pnotifyAlert();
  }

  refs.gallery.insertAdjacentHTML('beforeend', cards(card));
  scrollInto();
}

function clearGallery() {
  refs.gallery.innerHTML = '';
}

function scrollInto() {
  refs.loadMoreBtn.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
  });
}

function runShow(e) {
  const instance = basicLightbox.create(`
   <div class="modal">
        <img src='${e.target.dataset.src}' class='modal__img'></img>
    </div>
`);

  if (e.target.tagName === 'IMG') {
    instance.show();
  }
}
