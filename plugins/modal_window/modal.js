export class Modal {
  constructor(options) {
    // if (Modal.exists) {
    //   return Modal.instance;
    // }
    // Modal.exists = true;
    // Modal.instance = this;
    this.options = options;
    this.options.isClosable = this.options.isClosable ?? true;
  }

  create() {
    if (this.isCreated) {
      return console.log(
        'This modal is already created\nOptions: ',
        this.options
      );
    }

    const footer = `<div class="modal-body-footer">
                      <button data-action="close">Ok</button>
                      <button data-action="close">Close</button>
                    </div>`;

    document.body.insertAdjacentHTML(
      'afterbegin',
      `<div class="modal">
        <div class="modal-overlay hide-modal-overlay" data-action="close">
          <div class="modal-body hide-modal-body">
            <div class="modal-body-header">
              <h3>${this.options.title || ''}</h3>
              ${
                this.options.isClosable
                  ? `<span data-action="close">&times;</span>`
                  : ''
              }
            </div>
            <div class="modal-body-content">
              ${
                this.options.imgURL
                  ? `<img src="${this.options.imgURL}"  alt="image">`
                  : ''
              } 
              <p>
                ${this.options.content || ''}
              </p>
            </div>
            ${this.options.isClosable ? footer : ''}
          </div>
        </div>
      </div>`
    );

    this.isCreated = true;
    this.modal = document.querySelector('.modal');
    this.modalBody = document.querySelector('.modal-body');
    this.modalOverlay = document.querySelector('.modal-overlay');

    this.modalBody.style.width = this.options.width || '';

    this.modal.addEventListener('click', this.onClick.bind(this));
  }

  onClick(event) {
    const action = event.target.dataset.action;
    if (action) {
      this[action]();
    }
  }

  open() {
    if (Modal.isOpen) {
      return console.log('There is already opened modal window!!!');
    }
    this.modalBody.classList.remove('hide-modal-body');
    this.modalOverlay.classList.remove('hide-modal-overlay');
    Modal.isOpen = true;
  }

  close() {
    this.modalBody.classList.add('hide-modal-body');
    this.modalOverlay.classList.add('hide-modal-overlay');
    Modal.isOpen = false;
  }

  destroy() {
    this.modal.remove();
    this.isCreated = false;
    this.modalBody.removeEventListener(
      'click',
      this.onClick.bind(this)
    );
    // Modal.exists = false;
  }
}
