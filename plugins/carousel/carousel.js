export class Carousel {
  constructor(options) {
    this.options = options;
    this.position = 0;
  }

  create() {
    let images = '';
    if (this.options.images) {
      this.options.images.forEach((url) => {
        images += this.createItem(url);
      });
    }

    this.options.elem.insertAdjacentHTML(
      'afterend',
      `<div class="carousel">
          <div class="carousel-container" style="width: ${
            this.options.width * this.options.items
          }px;">
            <span class="arrow arrow-left" data-move="moveLeft"></span>
            <span class="arrow arrow-right" data-move="moveRight"></span>
            <ul class="carousel-gallery">
            ${images}
            </ul>
          </div>
        </div>`
    );
    this.carouselGallery = document.querySelector(
      '.carousel-gallery'
    );

    document.addEventListener('click', this.onClick.bind(this));
  }

  createItem(url) {
    return `<li class="carousel-gallery-item" style="width:${this.options.width}px;
              height:${this.options.width}px;">
              <img
                src="${url}"
                alt="img">
            </li>`;
  }

  onClick(event) {
    const action = event.target.dataset.move;
    if (action) {
      this[action]();
    }
  }

  moveLeft() {
    this.position += this.options.width;

    if (this.position > 0) {
      this.position =
        -this.options.width *
        (this.options.images.length - this.options.items);
    }

    this.position = Math.min(this.position, 0);
    this.carouselGallery.style.marginLeft = this.position + 'px';
  }

  moveRight() {
    this.position -= this.options.width;

    if (
      this.position <
      -this.options.width *
        (this.options.images.length - this.options.items)
    ) {
      this.position = 0;
    }

    this.position = Math.max(
      this.position,
      -this.options.width *
        (this.options.images.length - this.options.items)
    );
    this.carouselGallery.style.marginLeft = this.position + 'px';
  }
}
