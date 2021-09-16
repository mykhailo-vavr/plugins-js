export class Cards {
  constructor(options) {
    this.options = options;
    this.boundOnClick = this.onClick.bind(this); // it is making for correct removing of listener
  }

  create() {
    if (this.isCreated) {
      return console.log(
        'This cards is already created\nOptions: ',
        this.options
      );
    }

    let sliderItems = this.createSliderItems();
    this.sliderItems = sliderItems;

    this.currentItem =
      sliderItems[Math.floor(sliderItems.length / 2)];
    this.currentItem.classList.add('active');

    let slider = document.createElement('div');
    slider.classList.add('cards');
    this.options.elem.after(slider);
    this.slider = slider;

    slider.append(...sliderItems);
    this.isCreated = true;
  }

  createSliderItems() {
    return this.options.images.map(({ url, title }) => {
      return this.createSliderItem(url, title);
    });
  }

  createSliderItem(url, title) {
    let sliderItem = document.createElement('div');
    sliderItem.classList.add('cards-item');
    sliderItem.style.backgroundImage = `url(${url || ''})`;

    let h3 = document.createElement('h3');
    h3.textContent = title || '';
    sliderItem.append(h3);

    sliderItem.addEventListener('click', this.boundOnClick);

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
    console.log(this.slider);

    this.slider.remove();
  }
}
