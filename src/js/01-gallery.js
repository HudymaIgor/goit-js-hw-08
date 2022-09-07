// Add imports above this line
import { galleryItems } from './gallery-items';

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

// Change code below this line
const galarisEl = document.querySelector('.gallery');

const onGalari = ({ preview, original, description } = {}) => {
    return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>` };

const galarisСards = galleryItems.map((el) => {
   return  onGalari(el)
});

galarisEl.insertAdjacentHTML("afterbegin", galarisСards.join(''));
console.log(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });




console.log(galleryItems);
