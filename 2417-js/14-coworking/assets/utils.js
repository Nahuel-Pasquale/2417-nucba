

// MANEJO DE FECHAS

// let date = new Date();
// console.log(date)
// console.log(date.getDate(),date.getMonth() + 1,date.getFullYear())
// console.log(date.getMonth() + 1)
// console.log(date.getFullYear())


// MANEJO DE FECHAS

const getNextDay = () => {
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow
}

const getTomorrowDate = () => {
    let year = getNextDay().getFullYear()
    let month = getNextDay().getMonth() + 1;
    let day = getNextDay().getDate()
    // console.log(day, month, year)
    return `${year}-${padTo2Digits(month)}-${padTo2Digits(day)}`
}

function padTo2Digits(num) {
    return num.toString().padStart(2, "0")
    // padStart agrega caracteres al inicio de nuestra cadena
}

const setDateIntervals = () => {
    dateInput.value = getTomorrowDate();
    dateInput.min = getTomorrowDate();
    dateInput.max = getNextDay().getFullYear() + '-12-31';
}


// FUNCIONES PARA LA VALIDACION

const isValidDate = (date) => {
    const currentDate = new Date();
    const turnDate = new Date(date);
    // console.log('DATE ==>', currentDate < turnDate)
    // console.log('DATENEW ==>', currentDate > turnDate)
    return currentDate < turnDate;
}

const isPhoneValid = (phone) => {
    const re = /^[0-9]{10}$/;
    return re.test(phone)
}

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

const isEmpty = (value) => value === !value.length;


// MANEJO DE ERRORES

const showError = (input, message) => {
    const formField = input.parentElement;
    formField.classList.add('error')
    const error = formField.querySelector("small");
    error.textContent = message;
}

const clearError = (input) => {
    const formField = input.parentElement;
    formField.classList.remove('error')
    const error = formField.querySelector("small");
    error.textContent = '';
}

// FUNCIONES UTILES PARA TRABAJAR CON LAS PROPIEDADES DEL OBJETO 'agenda'


const getRadioValue = (inputs) => {
    // tenemos una nodelist de 3 elementos
    const checkedInput = [...inputs].find(input => input.checked);
    // devuelvo el input
    return checkedInput.value //agarramos el valor del input
}

const getCheckedOptions = (inputs) => {
    const checkedOptions = [...inputs]
        .filter(input => input.checked) // devuelvo un array con inputs checkeados
        .map(e => e.value); // [input1, input2, input3] ==> ['computadora', 'tele', 'tablet']
    console.log('checkedOptions ==>', checkedOptions)
    return checkedOptions; // ['computadora', 'tele', 'tablet'] || [] || ['computadora']
}

const formatDate = (date) => { // 2022-10-10 ==> [2022-10-10] ==> [10, 10, 2020] ==>  10/10/2022
    const splitDate = date.split('-').reverse().join('/');
    return splitDate;
}

// FORMATO DE LAS CARDS

const setCardBackground = (quantity) => {
    return quantity === 'Más de 10'
    ? 'violet-card'
    : quantity === 'Entre 5 y 10'
    ? 'red-card'
    : 'black-card'
}

const setTimeBackground = (quantity) => {
    return quantity === 'Menos de 5' ? 'red-card' : 'black-card'
}

const setDateBackground = (quantity) => {
    return quantity === 'Más de 10' ? 'red-card' : 'violet-card'
}

const setCardImg = (quantity) => {
    return quantity === 'Más de 10'
    ? './assets/img/server.png'
    : quantity === 'Entre 5 y 10'
    ? './assets/img/laptop.png'
    : './assets/img/lupa.png'
}

const setCardImgClass = (quantity) => {
    return quantity === 'Más de 10'
    ? 'server-img'
    : quantity === 'Entre 5 y 10'
    ? 'laptop-img'
    : 'lupa-img'
}


