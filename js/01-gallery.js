import { galleryItems } from "./gallery-items";
// Change code below this line

console.log(galleryItems);

// Przykładowa tablica obiektów z danymi o obrazkach
const galleryItems = [
  {
    smallImage: "small-image1.jpg",
    largeImage: "large-image1.jpg",
    alt: "Image 1 description",
  },
  {
    smallImage: "small-image2.jpg",
    largeImage: "large-image2.jpg",
    alt: "Image 2 description",
  },
  // Dodaj więcej obiektów galerii według potrzeb
];

// Funkcja do tworzenia elementów galerii
function createGalleryItem(item) {
  const li = document.createElement("li");
  const link = document.createElement("a");
  const image = document.createElement("img");

  li.classList.add("gallery-item");
  link.classList.add("gallery-link");
  image.classList.add("gallery-image");

  link.href = item.largeImage;
  image.src = item.smallImage;
  image.alt = item.alt;

  link.appendChild(image);
  li.appendChild(link);

  return li;
}

// Pobierz element listy galerii
const galleryList = document.querySelector(".gallery");

// Dodaj elementy galerii do listy
galleryItems.forEach((item) => {
  const galleryItem = createGalleryItem(item);
  galleryList.appendChild(galleryItem);
});
