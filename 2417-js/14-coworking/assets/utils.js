

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

const isValidDate = () => {
    const currentDate = new Date();
    const turnDate = getNextDay();
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


// FORMATO DE LAS CARDS


