const form = document.getElementById('form');
const cardsContainer = document.getElementById('cards-container')

// 2- traer elementos del LS si existen
let agenda = JSON.parse(localStorage.getItem('agenda')) || [];
// 3- grabar en LS
const saveLocalStorage = () => {
    localStorage.setItem('agenda', JSON.stringify(agenda))
}

const saveData = () => {
    agenda = [
        ...agenda,
        {
            id: agenda.length + 1,
            name: nameInput.value,
            surname: surnameInput.value,
            phone: phoneInput.value,
            email: emailInput.value,
            date: 'fecha', // formatDate(dateInput.value)
            time: hourInput.value,
            quantity: 'valor del input de tipo radio', // getRadioValue(radioInputs)
            extras: 'los valores de los inputs de tipo checkbox', // getCheckedOptions(checkboxInputs)
            about: aboutInput.value
        }
    ]
}

// 2- preparar el elemento a renderizar

// 3- hacer el mapeo del elemento a renderizar con los datos de la agenda si hay

// 4- submit


const init = () => {
    window.addEventListener('DOMContentLoaded', setDateIntervals)
    // form.addEventListener('submit', submitForm)
}

init();