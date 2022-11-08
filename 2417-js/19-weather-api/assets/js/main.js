const form = document.getElementById('form')
const cardContainer = document.querySelector('.card-container');
const cityInput = document.querySelector('.search-input');
const waitMsg = document.querySelector('.wait');
const btn = document.getElementById('btn')

let cities = JSON.parse(localStorage.getItem('cities')) || [];

const saveLocalStorage = (citiesList) => {
  localStorage.setItem('cities', JSON.stringify(citiesList))
}

const convertCelsius = (kelvin) => {
  const celsius = Math.round(kelvin - 273.15);
  return celsius;
}


const renderCity = (city) => {
  console.log('CITY ==> ', city)

  return `
  <div class="card-clima animate">
  <i class="fa-solid fa-x close" data-id='${city.id}'></i>
  <div class="clima-info">
            <h2 class="info-title">${city.name} ${city.sys.country}</h2>
            <p class="info-subtitle">${city.weather[0].description}</p>
            <div class="info-temp">
              <span class="temp">${convertCelsius(city.main.temp)}°</span>
              <span class="st">${convertCelsius(city.main.feels_like)}° ST</span>
            </div>
          </div>
          <div class="clima-img">
          <img src="./assets/img/${city.weather[0].icon}.png" alt=""/>
          </div>
          <div class="clima-temp">
            <div class="clima-max-min">
              <span class="clima-max"
                ><i class="fa-solid fa-arrow-up-long"></i>Max: ${convertCelsius(city.main.temp_max)}</span
              >
              <span class="clima-min"
                ><i class="fa-solid fa-arrow-down-long"></i>Min: ${convertCelsius(city.main.temp_min)}</span>
       </div>
     <span class="clima-humedad">${city.main.humidity}% Humedad</span>
  </div>
  </div> 
  `
}


const searchCity = async (e) => {
  e.preventDefault();

  // capturar el valor del input
  const searchedCity = cityInput.value.trim();
  // valido que el string no este vacio
  if(searchedCity === '') return alert('Por favor, ingrese una ciudad');
  // llamar a la api con el valor del input
  const fetchedCity = await requestCity(searchedCity);
  // corroborar que exista la ciudad
  if(!fetchedCity.id) {
    form.reset()
    return alert('La ciudad ingresada no existe');
  } else if (cities.some(city => city.id === fetchedCity.id)) {
    form.reset()
    return alert('ya estamos mostrando el clima de esa ciudad');
  }
  // renderizarlo
  cities = [fetchedCity, ...cities];
  renderCitiesList(cities)
  // guardo en LS
  saveLocalStorage(cities);
  // resetear el form
  hideWaitMsg(cities);
  form.reset();
}

const renderCitiesList = (citiesList) => {
  cardContainer.innerHTML = citiesList.map((city) => renderCity(city)).join('')
};

const hideWaitMsg = (citiesList) => {
  if(citiesList.length !== 0){
    waitMsg.classList.add('hidden');
    return;
  }
  waitMsg.classList.remove('hidden');
}

const removeCity = (e) => {
  if(!e.target.classList.contains('close')) return;

  const filterId = Number(e.target.dataset.id);
  if(window.confirm('¿Está seguro que desea eliminar esta card de clima?')) {
    cities = cities.filter(city => city.id !== filterId)
    renderCitiesList(cities);
    saveLocalStorage(cities);
    hideWaitMsg(cities);
  }
}

const deleteAll = () => {
  cities = []
  renderCitiesList(cities)
  saveLocalStorage(cities)
  hideWaitMsg(cities);
}


const init = () => {
  renderCitiesList(cities);
  hideWaitMsg(cities);
  form.addEventListener('submit', searchCity);
  cardContainer.addEventListener('click', removeCity)
  btn.addEventListener('click', deleteAll)
}

init();