// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const ulEl = document.querySelector(".gallery");

const markup = galleryItems.map(({ preview, original, description }) => `<li class="gallery__item">
<a class="gallery__link" href="${original}">
   <img class="gallery__image" src="${preview}" alt="${description}"/>
</a>
</li>`).join("");

ulEl.insertAdjacentHTML("beforeend", markup);

const lightbox = new SimpleLightbox('.gallery__link', { captionsData: 'alt',  captionDelay: 250 });
