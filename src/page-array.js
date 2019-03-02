export default function pageArray(array, page) {
   const startIndex = (page.currentPage - 1) * page.perPage;
   const endIndex = startIndex + page.perPage;
   return array.slice(startIndex, endIndex);
}