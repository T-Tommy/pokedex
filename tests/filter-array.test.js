const test = QUnit.test;

QUnit.module('Filtering Tests');

const testArray = [
   {
      'pokemon': 'bulbasaur',
      'type_1': 'grass',
      'type_2': 'poison',
      'generation_id': 1,
   },
   {
      'pokemon': 'charmander',
      'type_1': 'fire',
      'type_2': 'NA',
      'generation_id': 1,
   },
   {
      'pokemon': 'charizard',
      'type_1': 'fire',
      'type_2': 'flying',
      'generation_id': 1,
   },
   {
      'pokemon': 'blastoise',
      'type_1': 'water',
      'type_2': 'NA',
      'generation_id': 1,
   },
   {
      'pokemon': 'metapod',
      'type_1': 'bug',
      'type_2': 'NA',
      'generation_id': 1,
   },
   {
      'pokemon': 'butterfree',
      'type_1': 'bug',
      'type_2': 'flying',
      'generation_id': 1,

   },
   {
      'pokemon': 'meganium',
      'type_1': 'grass',
      'type_2': 'NA',
      'generation_id': 2,
   },
   {
      'pokemon': 'swampert',
      'type_1': 'water',
      'type_2': 'ground',
      'generation_id': 3,
   },
   {
      'pokemon': 'infernape',
      'type_1': 'fire',
      'type_2': 'fighting',
      'generation_id': 4,
   },
   {
      'pokemon': 'dragalge',
      'type_1': 'poison',
      'type_2': 'dragon',
      'generation_id': 6,
   },
];

function filterArray(testArray, filterChoices) {
   
}

test('Filter first type: grass', assert => {
    // Arrange
   const expected = [
      {
         'pokemon': 'bulbasaur',
         'type_1': 'grass',
         'type_2': 'poison',
         'generation_id': 1,
      },
      {
         'pokemon': 'meganium',
         'type_1': 'grass',
         'type_2': 'NA',
         'generation_id': 2,
      },
   ];
   const filterChoices = {
      type: 'grass',
   };

    // Act
   const result = filterArray(testArray, filterChoices);

    // Assert
   assert.equal(result, expected);
});