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

    let cards = document.createElement('div');
    cards.classList.add('cards');
    cards.style.height = this.options.height;
    cards.style.width = this.options.width;

    let cardsItems = this.createCardsItems();
    this.setCurrentItem(cardsItems);
    cards.append(...cardsItems);

    this.options.elem.after(cards);
    this.cards = cards;
    this.isCreated = true;
  }

  setCurrentItem(cardsItems) {
    this.currentItem = cardsItems[Math.floor(cardsItems.length / 2)];
    this.currentItem.classList.add('active');
  }

  createCardsItems() {
    return this.options.images.map((item) => {
      return this.createCardsItem(item);
    });
  }

  createCardsItem({ url, title }) {
    let cardsItem = document.createElement('div');
    cardsItem.classList.add('cards-item');
    cardsItem.style.backgroundImage = `url(${url || ''})`;
    cardsItem.innerHTML = `<h3>${title || ''}</h3>`;

    cardsItem.addEventListener('click', this.boundOnClick);

    return cardsItem;
  }

  onClick(event) {
    this.currentItem.classList.remove('active');
    this.currentItem = event.target;
    this.currentItem.classList.add('active');
  }

  destroy() {
    this.cardsItems.forEach((item) => {
      item.removeEventListener('click', this.boundOnClick);
    });
    this.cards.remove();
  }
}
