import { galleryItems } from "./gallery-items.js";
// Change code below this line

document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.querySelector(".gallery");

  galleryItems.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("gallery__item");

    const a = document.createElement("a");
    a.classList.add("gallery__link");
    a.setAttribute("href", item.original);

    const img = document.createElement("img");
    img.classList.add("gallery__image");
    img.setAttribute("src", item.preview);
    img.setAttribute("alt", item.description);
    img.setAttribute("data-source", item.original);

    a.appendChild(img);
    li.appendChild(a);
    gallery.appendChild(li);
  });

  gallery.addEventListener("click", function (event) {
    event.preventDefault();

    if (event.target.nodeName === "IMG") {
      const src = event.target.dataset.source;
      const alt = event.target.getAttribute("alt");

      const instance = basicLightbox.create(`
    <img src="${src}">
`);

      instance.show();
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
          instance.close();
        }
      });
    }
  });
});
