// const hola = () => {
//   console.log('hola')
// }

// const nucba = () => {
//   console.log('Nucba')
// }

// const main = () => {
//   hola();
//   nucba();
// }

// main();


// let juegosQueMePrestaron = 2;

// const mostrarMisJuegos = () => {
//   console.log('Mis juegos ==> ', misJuegos)
//   mostrarJuegosPrestados()
// }

// const mostrarJuegosPrestados = () => {
//   console.log(`Me prestaron ${juegosQueMePrestaron} juegos`)
//   juegosTuyos()
// }

// const juegosTuyos = () => {
//   console.log('Una lastima, no tenes para prestarme :´)')
// }


// setTimeout(() => {
//   mostrarMisJuegos();
// }, 20000)

//  callstack ==> juegosTuyos(), mostrarJuegosPrestados(), mostrarMisJuegos()


// let misJuegos = 200;

// console.log(misJuegos) /

// setTimeout(() => {
//   misJuegos = 2
// }, 2000) 

// setTimeout(() => {
//   console.log(misJuegos) 
// },2000)

// promesas, async y await

// const promesaOk = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Hola mundo, soy la primer promesa OK')
//   }, 2000);
// });
// const promesaErr = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject('Estoy rompiendo porque quiero')
//   }, 2000);
// });
// console.log(promesaOk);
// console.log(promesaErr);


const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Hola mundo, soy la primer promesa')
  }, 2000);
}); 

// console.log(promesa)

promesa
  .then(resolve => {
    console.log('RESOLVE ==> ',resolve)
  })
  .catch(err => {
    console.log('REJECT ==> ',err)
  })

console.log(promesa)
