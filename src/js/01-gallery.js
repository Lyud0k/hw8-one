// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items.js';

// Change code below this line
const findDiv = document.querySelector('.gallery');
const boxImages = listGallery(galleryItems);
findDiv.insertAdjacentHTML('beforeend', boxImages);

function listGallery(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
</a>
    `;
    }).join('');
}

findDiv.addEventListener('click', viewBigImage);
function viewBigImage(evt) {
    evt.preventDefault();
    // console.log(evt);
    const tuchOneEl = evt.target.classList.contains('gallery__image');
    if (!tuchOneEl) {
        return;
    }
    let gallery = new SimpleLightbox('.gallery a');
    gallery.on('show.simplelightbox', function () {
        console.log(gallery);
        gallery.defaultOptions.captionDelay = 250;
	// do something…
});
}

console.log(galleryItems);
