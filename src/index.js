import './sass/main.scss';
import NewApiService from './js/apiService.js';
import cards from './templates/cards.hbs';

const refs = {
  gallery: document.querySelector('.gallery'),

  searchForm: document.querySelector('.search-form'),
  loadMoreBtn: document.querySelector('.load-more'),
};
const newApiService = new NewApiService();

refs.searchForm.addEventListener('submit', onClickForm);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function onClickForm(e) {
  e.preventDefault();

  clearGallery();
  newApiService.query = e.currentTarget.elements.query.value;
  newApiService.resetPage();
  newApiService.gatePage().then(renderGalery);
  refs.loadMoreBtn.classList.remove('is-hidden');
}

function onLoadMore() {
  console.log('~  newApiService.pageNumber', newApiService.pageNumber);
  newApiService.gatePage().then(renderGalery);
}

function renderGalery(card) {
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
