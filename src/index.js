import pokemonList from '../data/pokedex.js';
import loadDisplay from './display-component.js';
import changePage from './paging-component.js';
import pageArray from './page-array.js';

import chooseFilter from './filter-component.js';

loadDisplay(pokemonList);
changePage(pokemonList.length, (pageInfo) => {
   const paged = pageArray(pokemonList, pageInfo);
   loadDisplay(paged); 
});

chooseFilter();