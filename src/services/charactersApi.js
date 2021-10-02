function getCharactersFromApi() {
  return fetch('https://rickandmortyapi.com/api/character')
    .then((response) => response.json())
    .then((json) => {
      //limpiamos los datos

      return json.results.map((character) => {
        return {
          id: character.id,
          name: character.name,
          species: character.species,
          image: character.image,
          episodes: character.episode.length,
          status: character.status,
          planet: character.origin.name,
        };
      });
    });
}

export default getCharactersFromApi;
