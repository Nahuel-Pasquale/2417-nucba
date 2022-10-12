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
            date: formatDate(dateInput.value),
            time: hourInput.value,
            quantity: getRadioValue(radioInputs), // el valor del input checkeado
            extras: getCheckedOptions(checkboxInputs), // [extras]
            about: aboutInput.value
        }
    ]
}

// 2- preparar el elemento a renderizar

const renderTurn = (turn) => {
    const { id, name, surname, phone, email, date, time, quantity, extras } = turn;
    return `
    <div class="card ${setCardBackground(quantity)}">
        <div class="card__left">
            <h2 class="card__title"> ORDEN: N°${id} - ${name} ${surname}</h2>
            <p class="card__qty"> ${quantity} </p>
            <p class="card__extras"> Extras: ${extras} </p>
            <div class="tags">
            <span class="card__hour ${setTimeBackground(quantity)}"> ${time} HS</span>
            <span class="card__date ${setDateBackground(quantity)}"> ${date} </span>
            </div>
        </div>
        <div class="card__right">
        <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${email}" target="_blank"> <i class="fa-solid fa-envelope"></i> </a>
        <a href="https://api.whatsapp.com/send?phone=+549${phone}&text=Boenas" target="_blank"> <i class="fa-solid fa-phone-flip"></i> </a>
        <img src=${setCardImg(quantity)} class="card__img ${setCardImgClass(quantity)}" alt="imagen">
        </div>
    </div>
    `
}

// 3- hacer el mapeo del elemento a renderizar con los datos de la agenda si hay

const renderAgenda = () => {
    // cardsContainer.innerHTML = agenda.map(turn => renderTurn(turn)).join('');
    cardsContainer.innerHTML = agenda.map(renderTurn).join(''); // return implicito
}
// 4- submit
const submitForm = (e) => {
    e.preventDefault(); // evito que recargue la pagina
    if(isValidForm()) { //checkeamos si el formulario que le enviamos es valido
        saveData(); // guardamos los datos
        form.reset(); // reseteamos los campos del form
        renderAgenda(); // renderizamos la agenda
        saveLocalStorage(); // guardamos en localStorage
        setDateIntervals(); // seteamos la fecha y sus limites
    }
}


const init = () => {
    renderAgenda();
    window.addEventListener('DOMContentLoaded', setDateIntervals);
    form.addEventListener('submit', submitForm);
}

init();