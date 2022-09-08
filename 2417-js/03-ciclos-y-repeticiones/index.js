

function identificador(parametros){
    // aca hace la magia.
}

// function saludar(){
//     console.log('Hola, soy una funcion')
// } 
// Declarando la funcion

// saludar(); ejecutando la funcion

function saludoPersonal(nombre) {
    console.log(`Hola, ${nombre}`)
}
// saludoPersonal('Nahuel');
// saludoPersonal('Joaquin');

function descripcionPersonal(nombre, edad){
    console.log(`Hola soy ${nombre} y tengo ${edad}`)
}
// descripcionPersonal('Nahuel', 29)
// is Not a Number (no es un numero)

function sumar(a, b){ // function clasica
    if(!isNaN(a) && !isNaN(b)){
        return a + b;
    } else {
        return 'pasame numeros'
    }
}
const sumarNumeros = (a, b) => { // funcion flecha
    if(!isNaN(a) && !isNaN(b)){
        return a + b;
    } else {
        return 'pasame numeros'
    }
}
// let resultado = sumarNumeros(2, 2);
// console.log(resultado);




let listaVacia = [];

// console.log(miListaDeSuper[0]) primero
// console.log(miListaDeSuper[miListaDeSuper.length -1]) ultimo
// console.log(miListaDeSuper.length)


// TRES TIPOS COMUNES DE LOOPS
// * FOR
// * WHILE
// * DO WHILE
// for( inicio ; condicion ; actualizacion){
//     hace la magia
// };

// console.log(miListaDeSuper.length)
// for(let i = 0; i < miListaDeSuper.length ; i++){
//     console.log(miListaDeSuper[i]);
// }


// INSTANCIA BREAK
// INSTANCIA CONTINUE
// for(i = 0 ; i <= 10 ; i++){
//     if(i === 3){
//         break;
//     }
//     console.log(`estamos por el numero ${i}`)
// }
// for(i = 0 ; i <= 10 ; i++){
//     if(i === 3 || i === 4){
//         console.log(`estamos por el numero ${i} antes del continue`)
//         continue;
//     }
//     console.log(`estamos por el numero ${i}`)
// }

// USEN ESTO
// for( i = 0; i <= 10 ; i++ ){
//     if( i % 2 !== 0 ){
//         continue;
//     }
//     console.log(`numero ${i}`)
// }
// const sumarNumeros = (a, b) => { // funcion flecha
//     if(!isNaN(a) && !isNaN(b)){
//         return a + b;
//     } else {
//         return 'pasame numeros'
//     }
// }
// USEN ESTO




let miListaDeSuper = ['cerveza', null, 'chocolate', null, 'papas'];
let arrDeNumeros = [1, 2, 3, 4, 5];
// WHILE

let i = 0; // inicio

// while(i <= 10) { 
//     console.log(`estamos por el numero ${i} EN el while`)
//     i++; 
// }
// DO WHILE
console.log(i)
do {
    console.log(`estamos por el numero ${i} DO WHILE`)
    i++;
    console.log(i)
} while (i <= 10)






