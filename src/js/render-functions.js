import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

let lightBox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    animationSlide: true
  });

export function render(images) {
    const gallery = document.querySelector(".gallery");
    gallery.innerHTML = '';
    
    const markup = images
    
    .map(({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) =>
    `<li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
          <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
        
        <div class="gallery-span-wrapper">
          <div class="gallery-span-wrapper-item">
            <span class="span-title">Likes</span>
            <span class="span-value">${likes}</span>
          </div>

          <div class="gallery-span-wrapper-item">
            <span class="span-title">Views</span>
            <span class="span-value">${views}</span>
          </div>

          <div class="gallery-span-wrapper-item">
            <span class="span-title">Comments</span>
            <span class="span-value">${comments}</span>
          </div>

          <div class="gallery-span-wrapper-item">
            <span class="span-title">Downloads</span>
            <span class="span-value">${downloads}</span>
          </div>
        </div>

        </a>
      </li>`)
        
    .join("");
    
  gallery.insertAdjacentHTML("afterbegin", markup);
  
  lightBox.refresh();
  
}

    