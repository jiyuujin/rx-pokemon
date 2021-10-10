export default {
    POKEMON_DOMAIN: (name: string) =>
        `https://www.pokemon.com/us/pokedex/${name}`,
    POKEMON_IMG_DOMAIN: (name: string) =>
        `https://img.pokemondb.net/artwork/large/${name}.jpg`,
}
