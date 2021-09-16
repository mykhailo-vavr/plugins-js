import { SliderModel } from './sliderModel.js';
import { SliderView } from './sliderView.js';

export class SliderController {
  constructor(options) {
    this.view = new SliderView(options);
  }

  create() {
    this.view.create();
    this.model = new SliderModel(this.view.header, this.view.gallery);
  }

  destroy() {
    document.removeEventListener('click', this.model.boundOnClick);
    this.view.slider.remove();
    this.view.isCreated = false;
  }
}
