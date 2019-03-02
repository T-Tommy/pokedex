import pokemonList from '../data/pokedex.js';
import loadDisplay from './display-component.js';
import changePage from './paging-component.js';
import pageArray from './page-array.js';

import chooseFilter from './filter-component.js';
import filterArray from './filter-array.js';

loadDisplay(pokemonList);
changePage(pokemonList.length, (pageInfo) => {
   const paged = pageArray(pokemonList, pageInfo);
   loadDisplay(paged); 
});

chooseFilter(pokemonList, filterChoices => {
   const filtered = filterArray(pokemonList, filterChoices);
   loadDisplay(filtered);
});