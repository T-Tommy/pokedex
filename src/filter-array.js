export default function filterArray(array, filter) {
   const filtered = array.filter(pokemon => {
      const type = filter.type === 'all' ? true : filter.type === pokemon.type_1 || filter.type === pokemon.type_2;
      const region = !filter.region ? true : filter.region === pokemon.generation_id;
      return type && region;
   });
   return filtered;
}