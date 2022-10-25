
// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Hola mundo, soy la primer promesa')
//   }, 2000);
// }); 

// console.log(promesa)

// promesa
//   .then(resolve => {
//     console.log('RESOLVE ==> ',resolve)
//   })
//   .catch(err => {
//     console.log('REJECT ==> ',err)
//   })

// console.log(promesa)

// console.log(first)

// TRYCATCH: 
// 1- tiene alcance en la funcion proxima
// 2- si tenemos funciones dentro de una funcion, deberiamos hacer un trycatch dentro de esa funcion

// const promesaTryCatch = new Promise((resolve, reject) => {
//     try {
//         resolve(first)
//     } catch (error) {
//       console.log(error)
//     }
// })

// promesaTryCatch
//   .then(resolve => {
//     console.log('RESOLVE ==> ',resolve)
//   })
//   .catch(err => {
//     console.log('REJECT ==> ',err)
//   })

// fetch(url)  DEVUELVE UNA PROMESA
//  .then(callback) TRABAJAMOS LA PROMESA, CON UN RESULTADO OK
//  .catch(callback) TRABAJAMOS LA PROMESA, CON UN RESULTADO DE ERROR

// function(paramentro1, parametro2)

// const baseUrl = 'https://api.openweathermap.org/data/2.5/'
// const queryParams = `weather?q=${city}&appid=${key}`

const url = "https://pokeapi.co/api/v2/pokemon/"

// const promesaFetchPokemon = new Promise(() => {
//   fetch(url)
//     .then(res => {
//       console.log('RES ==> ',res)
//       res.json()
//         .then(data => {
//           console.log(data.results)
//           resolve(data.results)
//         })
//     })
//     .catch(err => reject(err))
// })


fetch(url)
  .then(res => res.json())
  .then(data => console.log(data.results))
  .catch(err => console.log(err))

console.log(fetch(url).then(res => res.json()).then(data => data.results))





