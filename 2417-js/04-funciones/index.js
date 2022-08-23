// for(estado inicial, expresion, actualizacion)

// funciones recursivas

// function cuentaAtras(numero){
//     caso base
//     if(numero === 0) return 1
//     hacemos la magia
//     console.log(numero)
//     cuentaAtras(numero - 1) // 0
//     console.log(numero * 2);
//     return numero * 2;
// }
// cuentaAtras(10);

// 5 = 1*2*3*4*5


// function factorial(n){ 
//     if(n < 1) return 1;
//     console.log('primer numero:', n);
//     let resultado = n * factorial(n - 1)
//     console.log('segundo numero:', n);
//     console.log('resultado:', resultado);
//     return resultado
// }
// nunca llega al return hasta que encuentra el caso base.

// fn(10),fn(9),fn(8),fn(7),fn(6),fn(5),fn(4),24,6,2, 1 (cola de fubnciones)
// 1- n = 10,   10 * factorial(9)
// 2- n = 9,     9 * factorial(8)
// 3- n = 8,     8 * factorial(7)
// 4- n = 7,     7 * factorial(6)
// 5- n = 6,     6 * factorial(5)
// 6- n = 5,     5 * 24
// 7- n = 4,     4 * 6 = 24
// 8- n = 3,     3 * 2 = 6
// 9- n = 2,     2 * 1 = 2
// 10- n = 1,     1 * 1 = 1,

// const res = factorial(10);
// console.log(res);



// callback 

// function saludar(nombre){
//     console.log(`hola ${nombre}`)
// }

const saludar = (nombre) => {
    console.log(`hola ${nombre}`)
}

function procesarEntradaUsuario(callback){
    let nombre = prompt('ingresa tu nombre');
    callback(nombre);
}

// procesarEntradaUsuario(saludar);

const crearDicho = (dicho, callback) => {
    let miDicho = `nunca son suficientes ${dicho}`
    callback(miDicho)
}

const logDicho = (dicho) => {
    console.log(dicho);
}

// crearDicho('divs o console.log',logDicho);


function decirHolaAlUsuario(usuario) {
    return "Hola " + usuario + "!!!"
}
function decirAdiosAlUsuario(usuario) {
    return "Adios " + usuario + "!!!"
}
function crearSaludo( usuario, callback ){
    return callback(usuario)
}

// console.log(crearSaludo('Nahuel', decirHolaAlUsuario))
// console.log(crearSaludo('Maximo', decirAdiosAlUsuario))
// console.log(crearSaludo('Lucas', decirAdiosAlUsuario))
// console.log(crearSaludo('Salvador', decirAdiosAlUsuario))

// closure

// const a = 'Hola ';

// function global(){
//     const b = 'como '
//     function local(){
//         const c = 'va?'
//         return a + b + c
//     }
//     return local()
// }

// console.log(global());


const combo = function(){
    const tipoDeHamburguesa = ['carne', 'pollo', 'pescado', 'vegana']
    const tipoDePan = ['integral', 'blanco', 'papa', 'frances', 'arabe', 'masaMadre']
    const aderezos = ['cheddar', 'bacon', 'bbq', 'salta', 'jamon', 'parmesano']
    const acompañamiento = ['papas fritas', 'nugget', 'ensalada', 'aros de cebolla']
    const bebidas = ['gaseosa', 'agua', 'cerveza', 'vino', 'jugos']

    const elegirTipoDeHamburguesa = () => {
        return tipoDeHamburguesa;
    }
    function elegirTipoDePan(){
        return tipoDePan;
    }
    function elegirAderezos(){
        return aderezos;
    }
    function elegirAcompañamiento(){
        return acompañamiento;
    }
    function elegirBebidas(){
        return bebidas;
    }
    return {
        elegirTipoDeHamburguesa,
        elegirTipoDePan,
        elegirAderezos,
        elegirAcompañamiento,
        elegirBebidas
    }
}();

// console.log(combo.elegirTipoDeHamburguesa());
// console.log(combo.elegirTipoDePan());
// console.log(combo.elegirAderezos());
// console.log(combo.elegirAcompañamiento());
// console.log(combo.elegirBebidas());

const lista = (arr) => {
    for(let i = 0 ; i < arr.length ; i++){
        console.log(arr[i]);
    }
}

lista(combo.elegirTipoDePan());

// prompt, 
/*
 1-algo[0]
 2-algo[1]
*/
// prompt 2, 
/*
 1-algo[0]
 2-algo[1]
*/
