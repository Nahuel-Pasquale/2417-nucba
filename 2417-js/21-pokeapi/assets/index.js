const url = "https://pokeapi.co/api/v2/pokemon?limit=8&offset=0"
const caja = document.querySelector("#caja");
const loader = document.querySelector(".pokeballs-container");


const options = {
  next: null,
  isFetching: false
}

const fetchPokemons = async () => {
  const res = await fetch(url)
  const data = await res.json();
  console.log(data)
  return data;
}

const renderPokemon = (poke) => {
  const { id, name, height, weight, types, sprites, base_experience } = poke; 

  return  `
    <div class="poke"> 
        <img src="${sprites.other.home.front_default}"/>
        <h2>${name.toUpperCase()}</h2>
        <span class="exp">EXP: ${base_experience}</span>
        <div class="tipo-poke">
            ${types
                .map( tipo => {
                  return ` <span class="${tipo.type.name} poke__type">
                          ${tipo.type.name} </span>`;
                }).join('')
              }
        </div>
        <p class="id-poke">#${id}</p>
        <p class="height">Height: ${height / 10}m</p>
        <p class="weight">Weight: ${weight / 10}Kg</p>
    </div>
    `
}

const renderPokemonList = (pokeList) => {
  const cards = pokeList
    .map((pokemon) => {
      return renderPokemon(pokemon)
    })
    .join('');
  caja.innerHTML += cards;
}

const loadAndPrint = (pokeList) => {
  loader.classList.add('show');
  setTimeout(() => {
    renderPokemonList(pokeList);
    options.isFetching = false;
    loader.classList.remove('show');
  }, 1500)
}

// function init(){
//   window.addEventListener("DOMContentLoaded",func1)
//   window.addEventListener("scroll",func2)
// }


function init() {
  // evento para inicializar, cargar los primeros 8 pokemones
  window.addEventListener("DOMContentLoaded", async () => {
    let { next, results } = await fetchPokemons();
    options.next = next;

    const URLS = results.map((poke) => {
      return poke.url
    })

    const mapeoUrl = URLS.map(async (url) => {
      const nextPokemons = await fetch(url);
      return await nextPokemons.json()
    })

    const infoPokemones = await Promise.all(mapeoUrl);
    // console.log('infoPokemones' ,infoPokemones)
    renderPokemonList(infoPokemones)
  })

  // cuando estoy al final de la pagina (ya no tengo mas para scrolear),
  // otra peticion utilizando el url: Next, para traer los proximos 8

  window.addEventListener('scroll', async (e) => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    // console.log(scrollTop, clientHeight, scrollHeight);
    const bottom = scrollTop + clientHeight >= scrollHeight - 1;
    console.log(bottom);

    if(bottom && !options.isFetching) {
      options.isFetching = true;
      console.log('Llamando');

      const nextPokemons = await fetch(options.next);
      const { next, results } = await nextPokemons.json();
      options.next = next;

      const URLS = results.map((poke) => {
        return poke.url
      })
  
      const mapeoUrl = URLS.map(async (url) => {
        const nextPokemons = await fetch(url);
        return await nextPokemons.json()
      })
  
      const infoPokemones = await Promise.all(mapeoUrl);
      loadAndPrint(infoPokemones);
    }
  });
}

init();