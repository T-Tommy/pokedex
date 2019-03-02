const prevButton = document.getElementById('previous');
const nextButton = document.getElementById('next');
const currentPage = document.getElementById('current-page');
const totalPages = document.getElementById('total-pages');
const perPageSelect = document.getElementById('per-page-select');

let currentPageNumber = 1;
currentPage.textContent = currentPageNumber;

export default function changePage(listLength, callback) {

   let perPageNumber = Number(perPageSelect.value);
   let totalPagesNumber = Math.ceil(listLength / perPageNumber);
   totalPages.textContent = totalPagesNumber;
   updatePageNav();

   perPageSelect.addEventListener('change', () => {
      currentPageNumber = 1;
      perPageNumber = Number(perPageSelect.value);
      updatePageNav();
   });
   nextButton.addEventListener('click', () => {
      currentPageNumber++;
      updatePageNav();
   });
   prevButton.addEventListener('click', () => {
      currentPageNumber--;
      updatePageNav();
   });

   function updatePageNav() {
      totalPagesNumber = Math.ceil(listLength / perPageNumber);
      totalPages.textContent = totalPagesNumber;
      prevButton.disabled = currentPageNumber <= 1;
      if(currentPageNumber >= totalPagesNumber) {
         nextButton.disabled = true;
         currentPageNumber = totalPagesNumber;
      } else {
         nextButton.disabled = false;
      }
      currentPage.textContent = currentPageNumber;
      const pageInfo = {
         currentPage: currentPageNumber,
         perPage: perPageNumber
      };
      callback(pageInfo);
   }
}

