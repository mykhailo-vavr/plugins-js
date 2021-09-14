export class Slider {
  constructor(options) {
    this.options = options;
    this.boundOnClick = this.onClick.bind(this);
  }

  create() {
    let sliderItems = this.createSliderItems();
    this.sliderItems = sliderItems;

    this.currentItem =
      sliderItems[Math.floor(sliderItems.length / 2)];
    this.currentItem.classList.add('active');

    let slider = document.createElement('div');
    slider.classList.add('slider');
    this.options.elem.after(slider);
    this.slider = slider;

    slider.append(...sliderItems);
  }

  createSliderItems() {
    return this.options.images.map(({ url, title }) => {
      return this.createSliderItem(url, title);
    });
  }

  createSliderItem(url, title) {
    let sliderItem = document.createElement('div');
    sliderItem.classList.add('slider-item');
    sliderItem.style.backgroundImage = `url(${url || ''})`;

    let h3 = document.createElement('h3');
    h3.textContent = title || '';
    sliderItem.append(h3);

    sliderItem.addEventListener('click', this.boundOnClick);

    console.log(sliderItem);

    return sliderItem;
  }

  onClick(event) {
    this.currentItem.classList.remove('active');
    this.currentItem = event.target;
    this.currentItem.classList.add('active');
  }

  destroy() {
    this.sliderItems.forEach((item) => {
      item.removeEventListener('click', this.boundOnClick);
    });
    this.options.elem.remove(this.slider);
  }
}
