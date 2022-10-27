const url = "https://pokeapi.co/api/v2/pokemon/"
const div = document.getElementById('div')
const btn = document.getElementById('btn')
const btnDelete = document.getElementById('btn-delete')
const input = document.getElementById('input')

const traerPokemon = async () => {
  const id = input.value.toLocaleLowerCase();
  const response = await fetch(url + id);
  const data = await response.json();
  console.log(data)
  const html = 
    `
    <p styles="display: flex; justify-content: center; align-items: center;">
      <img width="100px" src="${data.sprites.other.home.front_default}">
      <img width="100px" src="${data.sprites.other.home.front_shiny}">
      ${data.name}
    </p>
    `
  div.innerHTML += html
  return data
}

// traerPokemon('pikachu');

const traerPokemones = async () => {
  // guardo el fetch en una variable, espero el valor
  const response = await fetch(url);
  // guardo la data de la respuesta en una variable, espero el valor de la
  // respuesta a json
  const data = await response.json();
  // mapeo para conseguir todos los datos de los pokemones en un array de promesas
  const arrPromesas = data.results.map((poke) => 
      fetch(poke.url).then(res => res.json())
    );
  // resuelvo cada promesa con un promise.all
  const results = await Promise.all(arrPromesas)
  console.log(results)
  mapearPokemones(results)
  return results
}

const mapearPokemones = (resultados) => {
  const html = resultados
    .map(
      (pokemon) => 
        `
          <p styles="display: flex; justify-content: center; align-items: center;">
            <img width="100px" src="${pokemon.sprites.other.home.front_default}">
            <img width="100px" src="${pokemon.sprites.other.dream_world.front_default}">
            ${pokemon.name}
          </p>
        `
    ).join('')
  div.innerHTML = html;
}

const deleteAll = () => {
  div.innerHTML = '';
}

btn.addEventListener('click', traerPokemon)
btnDelete.addEventListener('click', deleteAll)

traerPokemones();

const genericFetch = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    return data  
  } catch (error) {
    console.log(error)
  }
}
