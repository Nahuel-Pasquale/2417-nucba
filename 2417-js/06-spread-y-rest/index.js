class Auto {
    constructor(marca, modelo, año){
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    arrancar = function(){
        return 'el auto arrancó';
    }

    getNewMarca = function(nuevaMarca){
        return this.marca = nuevaMarca
    }
}

const auto = new Auto('Citroen', 'C3', '2007');

// console.log(auto);


const arr = [1,2,-3,4,5,6,7,8,-9,10]
const arr2 = [5,8,16,-15]

function sumarAll(a, ...args){
    let sum = a;

    for(let i of args) {
        sum += i;
    }

    return sum;
}
// console.log(sumarAll(...arr2, ...arr));

// console.log(arr);
// console.log(...arr);

class Milanesa {
    constructor(tamaño, sabor, precio, tipo){
        this.tamaño = tamaño
        this.sabor = sabor
        this.precio = precio
        this.tipo = tipo
    }
}

const mila = new Milanesa('Grande', 'a la pizza', '500', 'carne');

// console.log(...mila)

const toppings = {
    papasFritas: true,
    queso: true,
    jamon: true,
};

const toppingsArr = ['papasFritas','queso','jamon'];

const milaCompleta = {
    ...mila,
    toppings: toppings,
}

// console.log(milaCompleta);

const persona = {
    nombreTit: 'Nahuel',
    lugarDeResidencia: {
        pais: 'Argentina',
        localidad: 'Avellaneda',
    },
    datosBancarios: {
        numeroTarjeta: '4520 5489 6548 1235',
        codTarjeta: 963,
        vencimiento: '31/12',
    },
    trabajo: 'Profesor de JS',
    alumnos: ['Ramiro', 'Maxi', 'Ignacio','Mauro','Vazquez']
}

// console.log(persona.nombreTit, persona.trabajo)

// let { pais, localidad } = lugarDeResidencia
const { alumnos } = persona
const [ ram, ...resto ] = alumnos

const string = "  les dijo 'hola'  ";
const miAuto = "TenGo UN CitrOeN C3";
const miChocolate = 'milka oreo blanco'

// console.log(string.length)
// console.log(miAuto.toLocaleLowerCase())
// console.log(miAuto.toLocaleUpperCase())
// console.log(miChocolate.replace('Blanco', 'Negro'))
// console.log(miChocolate.replaceAll('Blanco', 'Negro'))
// console.log(string.trim().length)
// console.log(miChocolate.split(''))
// console.log(miChocolate.charAt(miChocolate.length -1))
// console.log(miChocolate.split(' '))



