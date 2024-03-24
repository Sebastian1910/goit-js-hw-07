import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

document.addEventListener('DOMContentLoaded', function () {
  const galleryContainer = document.getElementById('gallery');

  const galleryItems = [
    {
      smallImage: 'small-image1.jpg',
      largeImage: 'large-image1.jpg',
      alt: 'Image 1 description',
    },
    {
      smallImage: 'small-image2.jpg',
      largeImage: 'large-image2.jpg',
      alt: 'Image 2 description',
    },
    // Dodaj więcej obiektów galerii według potrzeb
  ];

  function createGalleryItem(item) {
    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery__item');

    const link = document.createElement('a');
    link.classList.add('gallery__link');
    link.href = item.largeImage;

    const image = document.createElement('img');
    image.classList.add('gallery__image');
    image.src = item.smallImage;
    image.dataset.source = item.largeImage;
    image.alt = item.alt;

    link.appendChild(image);
    galleryItem.appendChild(link);

    return galleryItem;
  }

  function openModal(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') return;

    const source = event.target.dataset.source;
    const instance = basicLightbox.create(
      `<img src="${source}" alt="${event.target.alt}">`
    );
    instance.show();
  }

  galleryContainer.addEventListener('click', openModal);

  // Zamknięcie okna modalnego po naciśnięciu klawisza Escape
  document.addEventListener('keydown', function (event) {
    const instance = basicLightbox.instance();
    if (event.key === 'Escape' && instance.visible()) {
      instance.close();
    }
  });

  // Renderowanie galerii
  galleryItems.forEach(item => {
    const galleryItem = createGalleryItem(item);
    galleryContainer.appendChild(galleryItem);
  });
});
