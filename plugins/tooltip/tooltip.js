export const tooltip = {
  elem: null,

  over(event) {
    let target = event.target.closest('[data-tooltip]');
    if (!target) return;
    this.create(target.dataset.tooltip, target);
  },

  out() {
    if (!this.elem) return;
    this.elem.remove();
    this.elem = null;
  },

  create(text, target) {
    this.elem = document.createElement('div');
    this.elem.classList.add('tooltip');
    this.elem.innerText = text;

    // let coords = this.getCoords(target);
    let coords = target.getBoundingClientRect();
    this.elem.style.left = coords.left + 'px';
    this.elem.style.top = coords.bottom + 'px';

    document.body.append(this.elem);
  },

  // getCoords(target) {
  //   let box = target.getBoundingClientRect();

  //   return {
  //     top: box.bottom + pageYOffset,
  //     left: box.left + pageXOffset,
  //   };
  // },
};
