function getCharactersFromApi() {
  return fetch('https://rickandmortyapi.com/api/character')
    .then((response) => response.json())
    .then((json) => {
      //limpiamos los datos

      return json.results.map((character) => {
        return {
          name: character.name,
          species: character.species,
          image: character.image,
        };
      });
    });
}

export default getCharactersFromApi;
