import { Modal } from '../plugins/modal_window/modal.js';
import { Carousel } from '../plugins/carousel/carousel.js';
import { tooltip } from '../plugins/tooltip/tooltip.js';
import { Cards } from '../plugins/cards/cards.js';
import { SliderController as Slider } from '../plugins/slider/sliderController.js';

/* -------------------
-
-
-     Modal window
-
-
------------------- */

let modals = [
  new Modal({
    title: 'Fullmetal Alchemist',
    content:
      "When a failed alchemical ritual leaves brothers Edward and Alphonse Elric with severely damaged bodies, they begin searching for the one thing that can save them; the fabled philosopher's stone.",
    imgURL:
      'https://upload.wikimedia.org/wikipedia/en/6/61/Fullmetal_Alchemist_-_Brotherhood_-_DVD1.jpg',
    id: 'fma',
    width: '400px',
    isClosable: false,
  }),
  new Modal({
    title: 'Attack on Titan',
    content:
      'After his hometown is destroyed and his mother is killed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.',
    imgURL:
      'https://pbs.twimg.com/profile_images/1324093768618909697/Ij-CAeyd_400x400.jpg',
    id: 'aot',
  }),
  new Modal({
    title: 'Death parade',
    content:
      'After death, there is no heaven or hell, only a bar that stands between reincarnation and oblivion.',
    imgURL:
      'https://lyricsfromanime.com/animes-info/death-parade/cover/death-parade-lyrics.jpg',
    id: 'dp',
  }),
];

modals.forEach((item) => {
  window[item.options.id] = item; // to interact from console
  item.create();
});

document.body.addEventListener('click', buttonClick);

function buttonClick(event) {
  const id = event.target.dataset.id;
  if (!id) {
    return;
  }
  const elem = modals.find((item) => item.options.id === id);
  if (elem) {
    elem.open();
  }
}

/* -------------------
-
-
-     Carousel
-
-
------------------- */

let images = [
  'https://besthqwallpapers.com/Uploads/17-2-2018/41098/thumb2-zero-two-manga-anime-characters-pink-hair-darling-in-the-franxx.jpg',
  'https://tehnografi.com/wp-content/uploads/2019/09/%D0%9A%D0%BE%D0%BD%D0%BA%D1%83%D1%80%D1%81-39Rick-amp-Morty39-%D0%BF%D1%80%D0%B5%D0%B4%D0%BB%D0%B0%D0%B3%D0%B0%D0%B5%D1%82-%D0%B1%D0%BE%D0%BB%D0%B5%D0%BB%D1%8C%D1%89%D0%B8%D0%BA%D0%B0%D0%BC-%D1%88%D0%B0%D0%BD%D1%81-%D0%BF%D1%80%D0%B8%D0%BD%D1%8F%D1%82%D1%8C-%D1%83%D1%87%D0%B0%D1%81%D1%82%D0%B8%D0%B5-%D0%B2.jpg',
  'https://cdn.vox-cdn.com/thumbor/WEgvHLW6q9T5m3I1nhKpvXuP5vs=/41x0:2173x1116/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/8268665/rick_morty_s3.png',
  'https://i.pinimg.com/originals/ec/bf/d3/ecbfd3544e4d33db38e4659b426fa0e3.jpg',
  'https://indianmemetemplates.com/wp-content/uploads/For-the-Better-Right.jpg',
  'https://upload.wikimedia.org/wikipedia/ru/6/69/My_Little_Pony_Friendship_Is_Magic_mobile_game_cover_art.jpg',
  'https://ru.wikifur.com/w/images/thumb/4/41/Rainbow_Dash_3.png/667px-Rainbow_Dash_3.png',
];

let carouselHeader = document.querySelector('.carousel-header');

let carousel = new Carousel({
  elem: carouselHeader,
  items: 3,
  width: 200,
  images: images,
});

carousel.create();

/* -------------------
-
-
-     Tooltip
-
-
------------------- */

document.body.addEventListener(
  'mouseover',
  tooltip.over.bind(tooltip)
);

document.body.addEventListener('mouseout', tooltip.out.bind(tooltip));

/* -------------------
-
-
-     Cards
-
-
------------------- */

let cardsHeader = document.querySelector('.cards-header');

let cards = new Cards({
  elem: cardsHeader,
  images: [
    {
      url: 'https://images.unsplash.com/photo-1589656966895-2f33e7653819?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      title: 'Bear',
    },
    {
      url: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=755&q=80',
      title: 'Hamster',
    },
    {
      url: 'https://images.unsplash.com/photo-1489084917528-a57e68a79a1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      title: 'Cat',
    },
    {
      url: 'https://images.unsplash.com/photo-1470093851219-69951fcbb533?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      title: 'Polar fox',
    },
    {
      url: 'https://images.unsplash.com/photo-1506099914961-765be7a97019?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      title: 'Deer',
    },
  ],
});

cards.create();
// cards.destroy();

/* -------------------
-
-
-     Slider
-
-
------------------- */

let slider = new Slider({
  elem: document.querySelector('.slider-header'),
  height: '500px',
  width: '100%',
  items: [
    {
      h2: 'Session is coming',
      h4: 'But I am not afraid',
      bgColor: `linear-gradient(36deg, rgba(144,140,133,1) 0%, rgba(153,138,118,1) 33%, rgba(161,141,115,1) 65%, rgba(170,137,90,1) 94%)`,
      url: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      h2: 'Final Boss',
      h4: 'But I am ready',
      bgColor: `linear-gradient(36deg, rgba(51,191,185,1) 0%, rgba(36,187,132,1) 3%, rgba(152,193,170,1) 100%, rgba(0,167,173,1) 100%)`,
      url: 'https://images.unsplash.com/photo-1571757767119-68b8dbed8c97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      h2: 'Сelebrate Passing Exams',
      h4: 'I am so happy',
      bgColor: `linear-gradient(36deg, rgba(51,191,185,1) 0%, rgba(177,122,109,1) 0%, rgba(193,101,79,1) 65%, rgba(216,74,40,1) 94%`,
      url: 'https://images.unsplash.com/photo-1594877502388-8d9e1dfcd84b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    },
    {
      h2: 'Сhimchikuyu In The University',
      h4: 'It would be better to sleep',
      bgColor: `linear-gradient(
        36deg,
        rgba(36, 187, 132, 1) 0%,
        rgba(152, 139, 29, 1) 0%,
        rgba(145, 141, 12, 1) 50%,
        rgba(152, 173, 0, 1) 100%
      )`,
      url: 'https://images.unsplash.com/photo-1610568781018-995405522539?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
  ],
});

slider.create();
// slider.destroy();
