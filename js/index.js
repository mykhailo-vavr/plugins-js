import { Modal } from '../plugins/modal_window/modal.js';
import { Carousel } from '../plugins/carousel/carousel.js';

// Modal window //
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
  window[item.options.id] = item;
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

// ------------------- //

// Carousel //

let images = [
  'https://besthqwallpapers.com/Uploads/17-2-2018/41098/thumb2-zero-two-manga-anime-characters-pink-hair-darling-in-the-franxx.jpg',
  'https://tehnografi.com/wp-content/uploads/2019/09/%D0%9A%D0%BE%D0%BD%D0%BA%D1%83%D1%80%D1%81-39Rick-amp-Morty39-%D0%BF%D1%80%D0%B5%D0%B4%D0%BB%D0%B0%D0%B3%D0%B0%D0%B5%D1%82-%D0%B1%D0%BE%D0%BB%D0%B5%D0%BB%D1%8C%D1%89%D0%B8%D0%BA%D0%B0%D0%BC-%D1%88%D0%B0%D0%BD%D1%81-%D0%BF%D1%80%D0%B8%D0%BD%D1%8F%D1%82%D1%8C-%D1%83%D1%87%D0%B0%D1%81%D1%82%D0%B8%D0%B5-%D0%B2.jpg',
  'https://cdn.vox-cdn.com/thumbor/WEgvHLW6q9T5m3I1nhKpvXuP5vs=/41x0:2173x1116/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/8268665/rick_morty_s3.png',
  'https://i.pinimg.com/originals/ec/bf/d3/ecbfd3544e4d33db38e4659b426fa0e3.jpg',
  'https://indianmemetemplates.com/wp-content/uploads/For-the-Better-Right.jpg',
  'https://upload.wikimedia.org/wikipedia/ru/6/69/My_Little_Pony_Friendship_Is_Magic_mobile_game_cover_art.jpg',
  'https://ru.wikifur.com/w/images/thumb/4/41/Rainbow_Dash_3.png/667px-Rainbow_Dash_3.png',
];

let elem = document.querySelector('.container');

let carousel = new Carousel({
  elem: elem,
  items: 3,
  width: 200,
  images: images,
});

// let carousel2 = new Carousel({
//   elem: elem,
//   items: 4,
//   width: 150,
//   images: images,
// });

carousel.create();
// carousel2.create();
