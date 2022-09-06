

// array.map( function(item, index, array){} )


// const nuevoArray = arr.map( (e) => {
//     hacemos la magia
//     console.log(e);
//     return e * 2;
// } )

// const nuevoObj = arrayObjetos.map( (objeto) => {
//     return {
//         ...objeto,
//         nombre: objeto.nombre.toUpperCase(),
//         edad: 18,
//     }
// } )

// array.filter( function(item, index, array) )

// const nuevoArr = arr.filter( (e) => e > 10 )

// const nuevoArrObj = arrayObjetos.filter( (e) => {
//     pueden poner todas las condiciones que quieran
//     return e.id === 2;
// } )

// arr.reduce(function(acumulador, item, index, array){})

// const nuevoArr = arr.reduce( (acumulador, e) => {
//     return acumulador + e;
// })

// arr.find(function(item, index, array){})

// const nuevoArrObjFiltrados = arrayObjetos.filter( e => e.id === 2 );
// todos los elementos que encuentre que cumpla con la condicion
// const nuevoArrObj = arrayObjetos.find( e => e.id === 2 );
// el primer elemento que encuentre que cumpla con la condicion

const arr = [10,2,3,4,55,16];
const arrayObjetos = [
    {id: 1, nombre: 'Nahu'},
    {id: 2, nombre: 'Douglas'},
    {id: 3, nombre: 'Naomi'},
    {id: 2, nombre: 'Ramiro'},
]

// array.some(function(item, index, array){}) boolean
// array.every(function(item, index, array){}) boolean

// const someRes = arr.some( e => e > 50 )
// const everyRes = arr.every( e => e > 1 )

// array.forEach(function(item, index, array){})
const otroArray = [];

arr.forEach(e => otroArray.push(e * e))
arr.forEach(e => console.log(e))

console.log(otroArray)



