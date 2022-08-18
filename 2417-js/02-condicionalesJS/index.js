// contexto de ejecicion

/*
    Fase de creacion

    - Escanea el codigo
    - guarda las variables en memoria
    - guarda las definiciones de funciones en memoria


    Fase de ejecucion 

    - el codigo se ejecuta linea por linea
    - Se asignan los valores a las variables
    - Se ejecutan las funciones
*/

// var num = 1;
// let num2 = 1;

// const num = 1;

// if(true) {
//     const num = 2;
//     num = 5;
//     console.log('VAR ===>',num);
// }
// console.log('VAR ===>',num);

// if(true) { 
//     let num2 = 2;
//     console.log('LET ===>',num2);
// }
// console.log('VAR OUT =>>',num);
// console.log('LET OUT =>>',num2);

//  == igual que
//  === igual estricto
//  != distinto
//  !==
//  <,<=,>,>= mayor blablba
//  && y
//  || o
//  !  negacion

let a = 1;
let b = 2;
let c = '1';
let d = true;
let e = false;

// console.log('1', a == b, a == c)
// console.log('2', a == c, a === c)
// console.log('3', a != c, a !== c)
// console.log('4', b > a , a >= c, a > c)
// console.log('5', a >= c && d)
// console.log('6', d && !e)
// console.log(!null);
// console.log(!!undefined);

// let verMensaje = true;

let mes = prompt('ingresa un mes');

// if(mes == 'octubre') {
//     console.log('hay cumpleaños')
// } else if(mes == 'diciembre')  {
//     console.log('es navidad')
// } else if(mes == 'enero') {
//     console.log('es año nuevo')
// } else {
//     console.log('no soy ninguna de las anteriores')
// }

switch(mes){
    case 'enero':
        console.log('Soy Enero');
        break;
    case 'febrero':
        console.log('Soy Febrero');
        break;
    case 'marzo':
        console.log('Soy Marzo');
        break;
    case 'Abril':
        console.log('Soy Abril');
        break;
    case 'Mayo':
        console.log('Soy Mayo');
        break;
    case 'Junio':
        console.log('Soy Junio');
        break;
    default:
        console.log('no soy ninguno de esos meses')
        // mes = prompt('elegi otro mes')
        //ejecutar una funcion;
} 
