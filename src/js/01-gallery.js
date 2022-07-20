import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryEl = document.querySelector('.gallery');

const makeGalleryMarkup = () => {
    const markup = galleryItems
        .map(({ preview, original, description }) =>
            `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}">
            </a>
        </div>`
        )
        .join('');

    galleryEl.innerHTML = markup;
};

makeGalleryMarkup();

const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
});


console.log(galleryItems);
