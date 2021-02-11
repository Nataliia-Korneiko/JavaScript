const refs = {
  gallery: document.querySelector(".js-gallery"),
  largeImage: document.querySelector(".js-large-image"),
};

refs.gallery.addEventListener("click", onGalleryClick);

function onGalleryClick(e) {
  e.preventDefault();
  console.log(e.target);

  if (e.target.nodeName !== "IMG") {
    return;
  }

  const imageRef = e.target;
  const largeImageURL = imageRef.dataset.source;

  // console.log(imageRef.dataset); // в html - data-source
  // console.log(largeImageURL);
  setLargeImageSrc(largeImageURL);
}

function setLargeImageSrc(url) {
  refs.largeImage.src = url;
}
