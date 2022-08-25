let color = 'string'
let bolean = true
let edad = 10
let actividad = []
let obj = {}
let undef = undefined
let nul = null

// console.log(typeof color)
// console.log(typeof bolean)
// console.log(typeof edad)
// console.log(typeof undef)
// console.log(typeof obj)
// console.log(typeof actividad)
// console.log(typeof nul)


// const obj = {
//     'key': 'valor',
// }

const perro = {
    nombre: 'firulais',
    color: 'Marmolado',
    actividades: ['come', 'duerme', 'vuelve a comer', 'vuelve a dormir'],
}

// console.log(perro)

class Pizza {
    constructor(tamaño, tipoDeMasa, sabor, precio, aceitunas = true){
        this.tamaño = tamaño;
        this.tipoDeMasa = tipoDeMasa;
        this.sabor = sabor;
        this.precio = precio;
        this.aceitunas = aceitunas;
    }
}

const pizzaMuzzarela = new Pizza('Grande', 'Masa Madre', 'Muzzarella', '1600')


console.log(pizzaMuzzarela)
// console.log(pizzaMuzzarela.sabor)

// pizzaMuzzarela.precio = 600;

// console.log(pizzaMuzzarela.precio)


class Robot {
    constructor(color, posX, posY){
        this.color = color;
        this.posX = posX;
        this.posY = posY;
    }

    // metodo para desplazar al robot
    desplazar = function(x, y){
        this.posX = x
        this.posY = y
    }

    // function que repare al robot

    // imprimir en consola la posicion
    getPosition = function(){
        console.log(`Estoy en la posicion ${this.posX} en X y en ${this.posY} en Y y soy de color ${this.color}`)
    }
}

const robot = new Robot('rojo', 10, 0)
const robotito = new Robot('Oxido', 0, 0)


// console.log(robotito)
// console.log(robotito.color)
// robotito.desplazar(15,53);

// robotito.getPosition();

class Persona {
    constructor(nombre, edad){ // constructor = palabra reservada dentro de una class
        this.nombre = nombre;
        this.edad = edad;
        const dni = '';

        this.getDni = function(){
            return dni;
        }
    }
}

const persona = new Persona('Nahuel', 29)

console.log(persona[0]);
console.log(persona.getDni());

const arrayDeObjetos = [{},{},{}]


