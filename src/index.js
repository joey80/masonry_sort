import Isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';
import images from './assets/images/*.jpg';

// TODO:
// - should move to single row on mobile
// - links should move to rows of 3 on mobile

const grid = document.querySelector('.grid');
const list = document.querySelector('.grid-header');

const data = [
  {
    name: 'Client One',
    image: 'portrait',
    description: 'A simple description of the work',
    type: 'marketing',
  },
  {
    name: 'Client Two',
    image: 'square2',
    description: 'A simple description of the work',
    type: 'print',
  },
  {
    name: 'Client Three',
    image: 'square',
    description: 'A simple description of the work',
    type: 'mail',
  },
  {
    name: 'Client Four',
    image: 'portrait',
    description: 'A simple description of the work',
    type: 'design',
  },
  {
    name: 'Client Five',
    image: 'square2',
    description: 'A simple description of the work',
    type: 'web',
  },
  {
    name: 'Client Six',
    image: 'square',
    description: 'A simple description of the work',
    type: 'signs',
  },
  {
    name: 'Client Seven',
    image: 'square',
    description: 'A simple description of the work',
    type: 'promo',
  },
  {
    name: 'Client Eight',
    image: 'square2',
    description: 'A simple description of the work',
    type: 'marketing',
  },
  {
    name: 'Client Nine',
    image: 'portrait2',
    description: 'A simple description of the work',
    type: 'print',
  },
  {
    name: 'Client Ten',
    image: 'square2',
    description: 'A simple description of the work',
    type: 'mail',
  },
  {
    name: 'Client Eleven',
    image: 'square',
    description: 'A simple description of the work',
    type: 'design',
  },
  {
    name: 'Client Twelve',
    image: 'portrait',
    description: 'A simple description of the work',
    type: 'web',
  },
];

const icons = [
  { name: 'all', image: '' },
  { name: 'marketing', image: '' },
  { name: 'print', image: '' },
  { name: 'mail', image: '' },
  { name: 'design', image: '' },
  { name: 'web', image: '' },
  { name: 'signs', image: '' },
  { name: 'promo', image: '' },
];

const buildContent = data
  .map(
    ({ image, type }) => `
    <div class='grid-item ${type}'>
      <img class='grid-image' src='${images[image]}' />
    </div>`
  )
  .join('');

const buildIconList = icons
  .map(
    ({ name }) => `
    <li class='list-item'>
      <button class='list-button' data-filter="${name === 'all' ? '*' : '.' + name}">
        <div class='list-circle'></div>
        <div class='list-text'>${name}</div>
      </button>
    </li>`
  )
  .join('');

grid.insertAdjacentHTML('beforeend', buildContent);
list.insertAdjacentHTML('beforeend', `<ul>${buildIconList}</ul>`);

const iso = new Isotope(grid, {
  itemSelector: '.grid-item',
  layoutMode: 'masonry',
  masonry: {
    columnWidth: '.grid-item',
    gutter: 10,
  },
  percentPosition: !0,
});

document.addEventListener('click', function (event) {
  if (
    event.target.classList.contains('list-button') ||
    event.target.parentNode.classList.contains('list-button')
  ) {
    const filterValue =
      event.target.getAttribute('data-filter') ||
      event.target.parentNode.getAttribute('data-filter');
    iso.arrange({ filter: filterValue });
  }
});

imagesLoaded(grid).on('progress', function () {
  iso.layout();
});
