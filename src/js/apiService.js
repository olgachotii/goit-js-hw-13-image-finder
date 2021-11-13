export default class NewApiService {
  constructor() {
    this.CAY_API = '24287584-f260c6215a8f38269d114f00b';
    this.pageNumber = 1;
    this.whatToSearch = '';
  }

  gatePage() {
    return fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.whatToSearch}&page=${this.pageNumber}&per_page=12&key=${this.CAY_API}
`)
      .then(res => res.json())
      .then(({ hits }) => {
        this.pageNumber += 1;
        return hits;
      });
  }

  resetPage() {
    this.pageNumber = 1;
  }

  get query() {
    return this.whatToSearch;
  }

  set query(newQuery) {
    this.whatToSearch = newQuery;
  }
}
