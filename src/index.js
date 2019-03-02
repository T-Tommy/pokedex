import pokemonList from '../data/pokedex.js';
import loadDisplay from './display-component.js';
// import changePage from './paging-component.js';
import pageArray from './page-array.js';

// import chooseFilter from './filter-component.js';
import filterArray from './filter-array.js';
import updateState from './update-state.js';

loadDisplay(pokemonList);
// changePage(pokemonList.length, (pageInfo) => {
//    const paged = pageArray(pokemonList, pageInfo);
//    loadDisplay(paged); 
// });

// chooseFilter(pokemonList, filterChoices => {
//    const filtered = filterArray(pokemonList, filterChoices);
//    loadDisplay(filtered);
// });
let state = {
   filter: {
      type: 'all',
      region: 0,
   },
   page: {
      currentPage: 1,
      perPage: 24
   },
   currentList: pokemonList
};

updateState(state, state => {
   const filtered = filterArray(state.currentList, state.filter);
   const paged = pageArray(filtered, state.page);
   loadDisplay(paged);
});