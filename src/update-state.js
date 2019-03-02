const perPageSelect = document.getElementById('per-page-select');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('previous');
const currentPage = document.getElementById('current-page');
const totalPages = document.getElementById('total-pages');

const typeSelect = document.getElementById('type-select');
const regionSelect = document.getElementById('region-select');

let currentPageNumber = 1;
currentPage.textContent = currentPageNumber;

export default function updateState(state, callback) {
   updatePage(state, callback);
}


function updatePage(state, callback) {
   displayPageNav();
   perPageSelect.addEventListener('change', () => {
      state.page.perPage = Number(perPageSelect.value);
      displayPageNav();
      callback(state);  
   });

   nextButton.addEventListener('click', () => {
      state.page.currentPage++;
      displayPageNav();
      callback(state);
   });

   prevButton.addEventListener('click', () => {
      state.page.currentPage--;
      displayPageNav();
      callback(state);
   });

   function displayPageNav() {
      const totalPagesNumber = Math.ceil(state.currentList.length / state.page.perPage);
      totalPages.textContent = totalPagesNumber;

      prevButton.disabled = state.page.currentPage <= 1;
      if(prevButton.disabled) {
         state.page.currentPage = 1;
      }
      nextButton.disabled = state.page.currentPage >= totalPagesNumber;
      if(nextButton.disabled) {
         state.page.currentPage = totalPagesNumber;
      }
      currentPage.textContent = state.page.currentPage;
   }
}




// function changePage(listLength, callback) {
//    const PER_PAGE = 25;
//    let totalPagesNumber = Math.ceil(listLength / PER_PAGE);
//    totalPages.textContent = totalPagesNumber;
//    updatePageNav();
//    nextButton.addEventListener('click', () => {
//       currentPageNumber++;
//       updatePageNav();
//    });
//    prevButton.addEventListener('click', () => {
//       currentPageNumber--;
//       updatePageNav();
//    });

//    function updatePageNav() {
//       prevButton.disabled = currentPageNumber === 1;
//       nextButton.disabled = currentPageNumber === totalPagesNumber;
//       currentPage.textContent = currentPageNumber;
//       const pageInfo = {
//          currentPage: currentPageNumber,
//          perPage: PER_PAGE
//       };
//       callback(pageInfo);
//    }
// }

// const typeSelect = document.getElementById('type-select');
// const regionSelect = document.getElementById('region-select');

// function chooseFilter(pokemonList, callback) {
   
//    typeSelect.addEventListener('change', () => {
//       updateFilter();
//    });
//    regionSelect.addEventListener('change', () => {
//       updateFilter();
//    });

//    function updateFilter() {
//       const filterChoices = {
//          type: typeSelect.value,
//          region: Number(regionSelect.value)
//       };
//       callback(filterChoices);
//    }
// }