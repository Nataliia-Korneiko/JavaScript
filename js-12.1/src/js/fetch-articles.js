import articlesTpl from '../templates/articles.hbs';

// const apiKey = '4330ebfabc654a6992c2aa792f3173a3';
// const url = `https://newsapi.org/v2/everything?q=bitcoin&language=en&apiKey=${apiKey}`;

// fetch(url)
//   .then(response => response.json())
//   .then(data => console.log(data.articles));

// -----------------------
const refs = {
  articlesContainer: document.querySelector('.js-articles'),
  searchForm: document.querySelector('.js-search-form'),
};

refs.searchForm.addEventListener('submit', event => {
  event.preventDefault();

  const form = event.currentTarget;
  const inputValue = form.elements.query.value;
  // console.log(inputValue);

  const apiKey = '4330ebfabc654a6992c2aa792f3173a3';
  const url = `https://newsapi.org/v2/everything?q=${inputValue}&language=en`;

  const options = {
    headers: {
      // 'X-Api-Key': apiKey,
      Authorization: apiKey,
    },
  };

  refs.articlesContainer.innerHTML = '';

  fetch(url, options)
    .then(response => response.json())
    .then(({ articles }) => {
      console.log(articles);

      const markup = articlesTpl(articles);
      // console.log(markup);

      refs.articlesContainer.insertAdjacentHTML('beforeend', markup);
    })
    .catch(error => console.log(error));
});
