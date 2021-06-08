import Isotope from 'isotope-layout';

return new Isotope('.grid', {
  itemSelector: '.grid-item',
  layoutMode: 'masonry',
  masonry: {
    columnWidth: '.grid-item',
    gutter: 10,
  },
  percentPosition: !0,
  sortBy: 'sortnum',
  getSortData: {
    category: '[data-category]',
    sortnum: '[data-num]',
  },
});
