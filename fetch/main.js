const target = 'https://jsonplaceholder.typicode.com/users';

fetch(target)
  .then(response => response.json())
  .then(data => console.log(data));

const favPokemon = 'pikachu';

fetch(`https://pokeapi.co/api/v2/pokemon/${favPokemon}`)
  .then(response => response.json())
  .then(data => console.log(data));
