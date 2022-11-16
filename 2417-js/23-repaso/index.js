
const div = document.getElementById('div')
const key = 'UDocRRGiNs50AurKdlTvc47ZYpOOsLxOfWm7KEBz'
const url = `https://api.nasa.gov/neo/rest/v1/feed?api_key=${key}`
const urlDigi = `https://digimon-api.vercel.app/api/digimon`
const urlDog = `https://dog.ceo/api/breeds/image/random`
const urlRM = "https://rickandmortyapi.com/api/character"


// https://api.nasa.gov/neo/rest/v1/feed?start_date=START_DATE&end_date=END_DATE&api_key=API_KEY

const pilaDeFunciones =  ['A1', 2, 3, 4, 5, 6]


const fetchNasa = async () => {
  const respuesta = await fetch(url);
  const data = await respuesta.json()
  console.log(data)

  try {
    const links = data.near_earth_objects['2022-11-09']
  
    const nearObjectsLinks = links.map(async link => {
      const url = link.links.self
      const resp = await fetch(url)
      const data = await resp.json()
      return console.log(data)
    })
    
  } catch (error) {
    console.log(error)
  }
}

// fetchNasa();

const renderCard = (card) => {
  const { image, name, species, status, origin } = card

  return `
    <h1> ${name} </h1>
    <img src="${image}" alt="soy un perro" />
    <p>  ${species},  ${status} </p>
    <p>  ${origin.name} </p>
  `
}
const renderCards = (list) => list.map(renderCard).join('')

const fetchGenerico = async () => {
  const respuesta = await fetch(urlRM);
  const data = await respuesta.json()

  div.innerHTML = renderCards(data.results)
  console.log(data.results)
}

const init = () => {
  window.addEventListener('DOMContentLoaded', fetchGenerico)
}

init();

