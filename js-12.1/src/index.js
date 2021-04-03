import './sass/styles.scss';
import './js/base';
import fetchArticles from './js/fetch-articles';
import updateArticlesMarkup from './js/update-articles-markup';
import refs from './js/refs';

refs.searchForm.addEventListener('submit', event => {
  event.preventDefault();

  const form = event.currentTarget;
  const inputValue = form.elements.query.value;
  // console.log(inputValue);

  refs.articlesContainer.innerHTML = '';
  form.reset();

  fetchArticles(inputValue).then(updateArticlesMarkup); // колбек
});
