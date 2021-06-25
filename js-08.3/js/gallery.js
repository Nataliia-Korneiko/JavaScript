import gallery from './gallery-items.js';

const refs = {
  galleryRef: document.querySelector('.js-gallery'),
  openModalRef: document.querySelector('.js-lightbox'),
  closeModalRef: document.querySelector('button[data-action="close-lightbox"]'),
  lightboxImageRef: document.querySelector('.lightbox__image'),
  lightboxRef: document.querySelector('.lightbox__overlay'),
};

const fragment = document.createDocumentFragment();

refs.galleryRef.addEventListener('click', openModal);
refs.closeModalRef.addEventListener('click', closeModal);
refs.lightboxRef.addEventListener('click', clickLightbox);

gallery.forEach((el, index) => {
  const itemRef = document.createElement('li');

  itemRef.classList.add('gallery__item');
  itemRef.insertAdjacentHTML(
    'afterbegin',
    `<a class="gallery__link" href="${el.original}">
      <img class="gallery__image" src="${el.preview}" data-source="${el.original}" data-index="${index}" alt="${el.description}">
    </a>`
  );

  fragment.append(itemRef);
});

refs.galleryRef.appendChild(fragment);

function pressKey(event) {
  const key = event.code;

  switch (key) {
    case 'Escape':
      closeModal();
      break;

    case 'ArrowRight':
      pressArrowRight();
      break;

    case 'ArrowLeft':
      pressArrowLeft();
      break;

    default:
      console.log('Please press the left or right arrow');
  }
}

function openModal(event) {
  event.preventDefault();

  const imageRef = event.target;
  const largeImageURL = imageRef.dataset.source;
  const indexImageURL = Number(imageRef.dataset.index);

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  refs.openModalRef.classList.add('is-open');
  refs.lightboxImageRef.src = largeImageURL;
  refs.lightboxImageRef.index = indexImageURL;

  window.addEventListener('keydown', pressKey);
}

function closeModal() {
  refs.openModalRef.classList.remove('is-open');
  refs.lightboxImageRef.src = '';
  refs.lightboxImageRef.alt = '';

  window.removeEventListener('keydown', pressKey);
}

function pressArrowRight() {
  if (refs.lightboxImageRef.index + 1 === gallery.length) {
    refs.lightboxImageRef.index = 0;
  } else {
    refs.lightboxImageRef.index++;
  }

  refs.lightboxImageRef.src = gallery[refs.lightboxImageRef.index].original;
  refs.lightboxImageRef.alt = gallery[refs.lightboxImageRef.index].description;
}

function pressArrowLeft() {
  if (refs.lightboxImageRef.index - 1 < 0) {
    refs.lightboxImageRef.index = gallery.length - 1;
  } else {
    refs.lightboxImageRef.index--;
  }

  refs.lightboxImageRef.src = gallery[refs.lightboxImageRef.index].original;
  refs.lightboxImageRef.alt = gallery[refs.lightboxImageRef.index].description;
}

function clickLightbox(event) {
  if (event.target === event.currentTarget) {
    closeModal();
  }
}
