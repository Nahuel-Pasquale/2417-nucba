const logo = document.getElementById('logo');
const title = document.getElementById('titulo');
const div = document.getElementById('div');
const input = document.getElementById('input');
const p = document.getElementById('p');


// p.className = 'color-azul'
// p.className += 'b-color'
p.classList.add('color-azul');
// p.classList.add('b-color');
p.style.fontSize = '30px';
// input.setAttribute('placeholder', 'escribi algo');

// console.log('input ==> ', input);
// console.log('parrafo ==> ', p.className);


// const handleClick = () => {
//     if(p.className.includes('hidden')){
//         p.classList.remove('hidden')   
//     } else {
//         p.classList.add('hidden');
//     }
// }

// const handleClick = () => p.className.includes('hidden') ? p.classList.remove('hidden') : p.classList.add('hidden');
// const handleClick = () => p.classList.toggle('color-azul');
// funcion para classList, donde evalua si existe o no la clase que pasamos como argumento a la funcion,
// y si esta existe la .remove y si no existe la .add

// let bolean = false;

// console.log(!bolean)
// bolean = !bolean
// console.log(!bolean)

// logo.addEventListener('click', handleClick);


// const handleChangeFocus = () => {
//     console.log('Focus')
// }
// const handleChangeBlur = () => {
//     console.log('Blur')
// }
// input.addEventListener('focus', handleChangeFocus)
// input.addEventListener('blur', handleChangeBlur)


// localStorage

// clear = borrar el storage
// setItem(JSON.stringify(objJS)) = agregar un item al storage
// getItem(JSON.parse(jsonString)) = trae los item al storage
// removeItem() = elimina un item al storage

localStorage.setItem('Nombre', 'Nahuel')
console.log(localStorage.getItem('Nombre'))

const objJS = {
    nombre: 'Nahuel',
    apellido: 'Pasquale',
    edad: 29
}
const objJSON = { // string
    "nombre": 'Nahuel',
    "apellido": 'Pasquale',
    "edad": 29
}

let jsonString = JSON.stringify(objJS)

console.log('JSON.STRINGIFY', JSON.stringify(objJS)) // lo guardamos en storage

console.log('JSON.PARSE', JSON.parse(jsonString)) // lo usamos en el codigo

localStorage.clear();
