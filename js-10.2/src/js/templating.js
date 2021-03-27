import itemsTemplate from '../templates/gallery-items.hbs';
import countries from '../countries.json';
import '../sass/gallery.scss';

// const tech = ['HTML', 'CSS', 'JS', 'React'];
// const galleryRef = document.querySelector('.js-gallery');
// const markup = tech
//   .map(
//     el =>
//       `<li>
//         <a href="#">${el}</a>
//       </li>`,
//   )
//   .join('');

// console.log(markup);
// galleryRef.insertAdjacentHTML('beforeend', markup);

// -----------------------
console.log(itemsTemplate);
console.log(countries);

const markup = itemsTemplate(countries);
console.log(markup);

const galleryRef = document.querySelector('.js-gallery');
galleryRef.insertAdjacentHTML('beforeend', markup);
