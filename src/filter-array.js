export default function filterArray(testArray, filterChoices) {
   const filtered = testArray.filter(pokemon => {
      const type = filterChoices.type === 'all' ? true : filterChoices.type === pokemon.type_1 || filterChoices.type === pokemon.type_2;
      const region = !filterChoices.region ? true : filterChoices.region === pokemon.generation_id;
      return type && region;
   });
   return filtered;
}