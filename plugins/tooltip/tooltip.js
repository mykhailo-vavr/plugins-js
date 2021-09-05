export const tooltip = {
  elem: null,

  over(event) {
    let target = event.target.closest('[data-tooltip]');
    if (!target) return;
    this.create(target.dataset.tooltip);
  },

  out() {
    if (!this.elem) return;
    this.elem.remove();
    this.elem = null;
  },

  create(text) {
    this.elem = document.createElement('div');
    this.elem.classList.add('tooltip');
    this.elem.innerText = text;
    document.body.append(this.elem);
  },
};
