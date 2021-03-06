import Isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';
import Glightbox from 'glightbox';
import portrait from 'url:~/src/assets/images/portrait.jpg';
import portrait2 from 'url:~/src/assets/images/portrait2.jpg';
import square from 'url:~/src/assets/images/square.jpg';
import square2 from 'url:~/src/assets/images/square2.jpg';

// TODO:
// - should move to single row on mobile
// - links should move to rows of 3 on mobile

const grid = document.querySelector('.grid');
const list = document.querySelector('.grid-header');

const toKebabCase = (string) =>
  string
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();

const data = [
  {
    name: 'Client One',
    image: portrait,
    description: 'A simple description of the work for client one',
    type: 'marketing',
  },
  {
    name: 'Client Two',
    image: square2,
    description: 'A simple description of the work for client two',
    type: 'print',
  },
  {
    name: 'Client Three',
    image: square,
    description: 'A simple description of the work for client three',
    type: 'mail',
  },
  {
    name: 'Client Four',
    image: portrait,
    description: 'A simple description of the work for client four',
    type: 'design',
  },
  {
    name: 'Client Five',
    image: square2,
    description: 'A simple description of the work for client five',
    type: 'web',
  },
  {
    name: 'Client Six',
    image: square,
    description: 'A simple description of the work for client six',
    type: 'signs',
  },
  {
    name: 'Client Seven',
    image: square,
    description: 'A simple description of the work for client seven',
    type: 'promo',
  },
  {
    name: 'Client Eight',
    image: square2,
    description: 'A simple description of the work for client eight',
    type: 'marketing',
  },
  {
    name: 'Client Nine',
    image: portrait2,
    description: 'A simple description of the work for client nine',
    type: 'print',
  },
  {
    name: 'Client Ten',
    image: square2,
    description: 'A simple description of the work for client ten',
    type: 'mail',
  },
  {
    name: 'Client Eleven',
    image: square,
    description: 'A simple description of the work for client eleven',
    type: 'design',
  },
  {
    name: 'Client Twelve',
    image: portrait,
    description: 'A simple description of the work for client twelve',
    type: 'web',
  },
];

const icons = [
  {
    icon: '<i class="fas fa-sync-alt"></i>',
    name: 'all',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-1.5 -2.5 24 24" width="35" height="35" preserveAspectRatio="xMinYMin"><path fill="currentColor" d="M17.83 4.194l.42-1.377a1 1 0 1 1 1.913.585l-1.17 3.825a1 1 0 0 1-1.248.664l-3.825-1.17a1 1 0 1 1 .585-1.912l1.672.511A7.381 7.381 0 0 0 3.185 6.584l-.26.633a1 1 0 1 1-1.85-.758l.26-.633A9.381 9.381 0 0 1 17.83 4.194zM2.308 14.807l-.327 1.311a1 1 0 1 1-1.94-.484l.967-3.88a1 1 0 0 1 1.265-.716l3.828.954a1 1 0 0 1-.484 1.941l-1.786-.445a7.384 7.384 0 0 0 13.216-1.792 1 1 0 1 1 1.906.608 9.381 9.381 0 0 1-5.38 5.831 9.386 9.386 0 0 1-11.265-3.328z"></path></svg>',
  },
  {
    icon: '<i class="fas fa-chart-pie"></i>',
    name: 'marketing',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="35" height="35" preserveAspectRatio="xMinYMin"><path fill="currentColor" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zM9 1h2v10H9V1zm0 8h10v2H9V9z"></path></svg>',
  },
  {
    icon: '<i class="fas fa-print"></i>',
    name: 'print',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-4 -2 24 24" width="35" height="35" preserveAspectRatio="xMinYMin"><path fill="currentColor" d="M3 0h10a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm0 2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3zm2 13h2a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2zm6-12a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-6 6h6a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2zm0-3h6a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2zm.5-6h2A1.5 1.5 0 0 1 9 4.5v2A1.5 1.5 0 0 1 7.5 8h-2A1.5 1.5 0 0 1 4 6.5v-2A1.5 1.5 0 0 1 5.5 3z"></path></svg>',
  },
  {
    icon: '<i class="far fa-paper-plane"></i>',
    name: 'mail',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="35" height="35" preserveAspectRatio="xMinYMin"><path fill="currentColor" d="M16.907 4.44l-7.655 7.655c.227.325.42.676.575 1.048l1.91 4.599 5.17-13.303zm-9.002 6.308l7.656-7.656-13.303 5.17 4.599 1.911a5.51 5.51 0 0 1 1.048.575zm11.618-7.862l-6.027 15.506c-.38.98-1.477 1.483-2.449 1.124a1.831 1.831 0 0 1-1.057-1.017L8.08 13.9a3.662 3.662 0 0 0-1.98-1.98l-4.6-1.91C.546 9.613.11 8.51.528 7.544a1.95 1.95 0 0 1 1.08-1.04L17.114.475a1.852 1.852 0 0 1 2.41 2.41z"></path></svg>',
  },
  {
    icon: '<i class="far fa-object-group"></i>',
    name: 'design',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -2 24 24" width="35" height="35" preserveAspectRatio="xMinYMin"><path fill="currentColor" d="M9 14v-2.298l.856-.597a5 5 0 1 0-5.712 0l.856.597V14h1V6a1 1 0 1 1 2 0v8h1zm0 2H5v2h4v-2zM0 7a7 7 0 1 1 11 5.745V18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5.255A6.992 6.992 0 0 1 0 7z"></path></svg>',
  },
  {
    icon: '<i class="fas fa-mobile-alt"></i>',
    name: 'web',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-6 -2 24 24" width="35" height="35" preserveAspectRatio="xMinYMin"><path fill="currentColor" d="M3 0h6a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm0 2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3zm3 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"></path></svg>',
  },
  {
    icon: '<i class="fas fa-sign"></i>',
    name: 'signs',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-4 -2 24 24" width="35" height="35" preserveAspectRatio="xMinYMin"><path fill="currentColor" d="M14 8.322V2H2v12h3.576l3.97-5.292A3 3 0 0 1 14 8.322zm0 3.753l-1.188-2.066a1 1 0 0 0-1.667-.101L8.076 14H14v-1.925zM14 16H2v2h12v-2zM2 0h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm4 9a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path></svg>',
  },
  {
    icon: '<i class="fas fa-pen-alt"></i>',
    name: 'promo',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="35" height="35" preserveAspectRatio="xMinYMin"><path fill="currentColor" d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4zm10.874 1H16a4 4 0 0 1 4 4v3a4 4 0 0 1-4 4h-1v2a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h7a4.002 4.002 0 0 1 3.874 3zM15 12h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1v7z"></path></svg>',
  },
];

const buildContent = data
  .map(
    ({ description, image, name, type }) => `
    <div class='grid-item ${type}'>
      <a class="glightbox" data-glightbox="description: .custom-desc-${toKebabCase(
        name
      )}; descPosition: right" href='${image}'>
        <div class='grid-overlay'>
          <div class='grid-overlay-title'>${name}</div>
          <svg style="display:block;" xmlns="http://www.w3.org/2000/svg" viewBox="-2.5 -2.5 24 24" width="20" height="20" preserveAspectRatio="xMinYMin"><path fill='#fff' d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12zm6.32-1.094l3.58 3.58a1 1 0 1 1-1.415 1.413l-3.58-3.58a8 8 0 1 1 1.414-1.414zM9 7h2a1 1 0 0 1 0 2H9v2a1 1 0 0 1-2 0V9H5a1 1 0 1 1 0-2h2V5a1 1 0 1 1 2 0v2z"></path></svg>
        </div>
      </a>
      <img class='grid-image' src='${image}' />
      <div class="grid-description glightbox-desc custom-desc-${toKebabCase(name)}">
        <h2>${name}</h2>
        <p>${description}</p>
      </div>
    </div>`
  )
  .join('');

const buildIconList = icons
  .map(
    ({ icon, name }) => `
    <li class='list-item'>
      <button class='list-button' data-filter="${name === 'all' ? '*' : '.' + name}">
        <div class='list-circle'>${icon}</div>
        <h3 class='list-text'>${name}</h3>
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

document.addEventListener('click', (event) => {
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

if (Glightbox) {
  const lightbox = Glightbox({
    touchNavigation: true,
    loop: true,
  });
}
