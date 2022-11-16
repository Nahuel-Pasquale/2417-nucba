class ClienteOBJ {
  constructor(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.movimientos = [];
  }

  tipoCliente() {
    let tipo;

    if(this.saldo > 1000) {
      tipo = 'Gold';
    } else if( this.saldo > 500) {
      tipo = 'Platinum'
    } else {
      tipo = 'Normal'
    }
    return tipo
  }

  nombreClienteSaldo() {
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, tipo: ${this.tipoCliente()}`
  }
}

const cliente = new ClienteOBJ('Nahuel' , 1000);

// console.log(cliente);

ClienteOBJ.prototype.retirarSaldo = function(saldo) {
  return this.saldo -= saldo;
}

// console.log(cliente.retirarSaldo(550));
// console.log(cliente.nombreClienteSaldo());

Array.prototype.getLastItem = function() {
  return this[this.length - 1];
}


const arr = [1,2,3]

arr.getLastItem()
console.log(arr.getLastItem());


const user = {
  name: 'Nahu',
}

const producto = {
  name: 'FIFA',
}

function showInfo(pedidos, cuotas) {
  return ` ${this.name} tiene ${pedidos} pedidos en ${cuotas} cuotas `
}

console.log(showInfo(3, 12));
console.log(showInfo.call(user, 3, 12));
console.log(showInfo.apply(user, [3, 12]));
// console.log(showInfo.bind(user));

const nuevaFuncion = showInfo.bind(user);
console.log(nuevaFuncion(19, 450000));

class Cajero {
  constructor(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
  }

  bienvenida() {
    return `bienvenidos al cajero`
  }
}

class CajeroCompleto extends Cajero {
  constructor(nombre, saldo, tipo, servicio){
    super(nombre,saldo)
    this.tipo = tipo;
    this.servicio = servicio;
  }

  imprimirTipo() {
    console.log(this.tipo);
  }
}

const cajero1 = new Cajero('MDQ', 20000);
const cajero2 = new CajeroCompleto('BS AS', 1000, 'autoservicio', 'Solo Depositos');

console.log(cajero2.bienvenida());