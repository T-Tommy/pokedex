const perPageSelect = document.getElementById('per-page-select');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('previous');

const typeSelect = document.getElementById('type-select');
const regionSelect = document.getElementById('region-select');

export default function updateState(state, callback) {
   updatePage(state, callback);
   updateFilter(state, callback);
}

function updatePage(state, callback) {
   perPageSelect.addEventListener('change', () => {
      state.page.perPage = Number(perPageSelect.value);
      state.page.currentPage = 1;
      callback(state);  
   });

   nextButton.addEventListener('click', () => {
      state.page.currentPage++;
      callback(state);
   });

   prevButton.addEventListener('click', () => {
      state.page.currentPage--;
      callback(state);
   });
}

function updateFilter(state, callback) {
   typeSelect.addEventListener('change', () => {
      state.filter.type = typeSelect.value;
      state.page.currentPage = 1;
      callback(state);
   });

   regionSelect.addEventListener('change', () => {
      state.filter.region = Number(regionSelect.value);
      state.page.currentPage = 1;
      callback(state);
   });
}