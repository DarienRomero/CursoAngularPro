//Función anónima autoinvocada
const TOTAL_POKEMONS = 10;
const TOTAL_PAGES = 10;
(async()=>{
    const fs = require('fs')
    const pokemonIds = Array.from({length: TOTAL_POKEMONS}, (_, i) => i + 1)
    const pagesIds = Array.from({length: TOTAL_PAGES}, (_, i) => i + 1)

    let fileContentPokemons = pokemonIds.map(id => `/pokemons/${id}`).join('\n')
    let fileContentPages = pagesIds.map(id => `/pokemons/page/${id}`).join('\n')

    //Por nombre de Pokemons
    const pokemonNameList = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${TOTAL_POKEMONS}`)
        .then(res => res.json())

    console.log('pokemonNameList', pokemonNameList)
    
    let fileContentPokemonsByName = pokemonNameList.results.map(data => `/pokemons/page/${data.name}`).join('\n')
    

    fs.writeFileSync('routes.txt', fileContentPokemons + '\n' +fileContentPages+'\n'+fileContentPokemonsByName) 

    console.log("Routes txt generated")
})();