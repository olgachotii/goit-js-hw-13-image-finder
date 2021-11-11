const CAY_API = '24287584-f260c6215a8f38269d114f00b';

export default function gatePage(whatToSearch, pageNumber = 1) {
  return fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${whatToSearch}&page=${pageNumber}&per_page=12&key=${CAY_API}
`).then(res => {
    return res.json();
  });
}
