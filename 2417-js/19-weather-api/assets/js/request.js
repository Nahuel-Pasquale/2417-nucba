// Guardamos la ApiKey
const key = '8e99183ac22ab0aeb4e9bb4e89a4da31';

const requestCity = async (city) => {
  const baseURL = 'https://api.openweathermap.org/data/2.5/'
  const query = `weather?q=${city}&appid=${key}`

  const response = await fetch(baseURL + query)
  const data = await response.json()

  console.log('DATA ==> ', data);
  return data;
}


