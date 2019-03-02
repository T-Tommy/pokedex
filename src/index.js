import pokemonList from '../data/pokedex.js';
import loadDisplay from './display-component.js';
import pageArray from './page-array.js';
import filterArray from './filter-array.js';
import updateState from './update-state.js';

const state = {
   filter: {
      type: 'all',
      region: 0,
   },
   page: {
      currentPage: 1,
      perPage: 24
   },
   currentList: pokemonList,
   pagedList: []
};

state.pagedList = pageArray(pokemonList, state.page);
loadDisplay(state.pagedList, state);

updateState(state, state => {
   state.currentList = filterArray(pokemonList, state.filter);
   state.pagedList = pageArray(state.currentList, state.page);
   loadDisplay(state.pagedList, state);
});


