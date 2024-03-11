const getPokemonById = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const pokemon = await  (await fetch(url)).json()
   return pokemon.name
};

module.exports = getPokemonById;
