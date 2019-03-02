const typeSelect = document.getElementById('type-select');
const regionSelect = document.getElementById('region-select');

export default function chooseFilter() {

   typeSelect.addEventListener('change', () => {
      updateFilter();
   });
   regionSelect.addEventListener('change', () => {
      updateFilter();
   });

   function updateFilter() {
      const filterChoices = {
         type: typeSelect.value,
         region: regionSelect.value
      };
      console.log(filterChoices);
   }
}