
/* 1. Hacer un menu (navbar) que tenga un logo el icono de menu y adentro 3 enlaces que esten ocultos.
    Hacer un addEventListener al menu para desplegar los elementos.*/

const barsBtn = document.querySelector('.menu-label');
const barsMenu = document.querySelector('.navbar-list');

barsBtn.addEventListener('click', () => {
  barsMenu.classList.toggle('open-menu');
});

window.addEventListener('scroll', () => {
  if(!barsMenu.classList.contains('open-menu')) return;
  barsMenu.classList.remove('open-menu');
});

/*
2.  Validacion de forms. Hacer un form que tenga email, contraseña, que valide que el email se un email 
    y la contraseña tengo mayuscula, minuscula y un numero.
    Si da error, renderizar en el html el texto con un error. 
    Ej, Email invalido / La contraseña tiene que tener una mayuscula, minuscula y un numero.
*/

const emailInput = document.getElementById('email');
const passInput = document.getElementById('pass');
const validForm = document.getElementById('valid-form');

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

const isEmpty = (value) => value === !value.length;

const isEmailValid = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

const isPassValid = (pass) => {
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
  return re.test(pass);
}

const checkEmail = () => {
  let valid = false;
  const emailValue = emailInput.value.trim();

  if(isEmpty(emailValue)) {
    showError(emailInput, 'El email es obligatorio');
  } else if(!isEmailValid(emailValue)) {
    showError(emailInput, 'El email no es valido');
  } else {
    clearError(emailInput)
    valid = true;
  }
  return valid
}

const checkPassword = () => {
  let valid = false;
  const password = passInput.value.trim();
  if(isEmpty(password)){
    showError(passInput, 'La contraseña es obligatoria')
  } else if(!isPassValid(password)){
    showError(passInput, 'La contraseña debe tener al menos 8 caracteres, entre ellos una mayuscula, un número y un caracter especial')
  } else {
    clearError(passInput)
    valid = true;
  }
  return valid;
}


validForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // valido cada input
  const isEmailValid = checkEmail();
  const isPasswordValid = checkPassword();
  // valido el form
  const isFormValid = isEmailValid && isPasswordValid;
  if(isFormValid) {
    validForm.submit();
    alert('Formulario enviado');
  }
})


/*3. Tenemos este array de tareas. Crear una funcion para renderizar cada elemento de este array
en una lista desordenada.*/

const tareas = [
  'Estudiar Javascript',
  'Comer una hamburguesa',
  'Hacer las compras',
  'Lavar la ropa',
  'Ver un capitulo de la serie',
  'Leer un libro',
];

const renderList = (tareas) => {
  const list = document.getElementById('list');
  tareas.forEach(tarea => {
    const li = document.createElement('li');
    li.textContent = tarea;
    list.appendChild(li)
  });
};
renderList(tareas);

/*
4. Hacer un input y un boton de enviar. 
    Crear una funcion para pintar en el html lo que escribamos en el
    input cuando apretemos el boton de enviar. 
    Y que los datos persistan en el local storage
*/
const form = document.getElementById('form');
const input = document.getElementById('input');
const caja = document.getElementById('caja');

// 2- traer elementos del LS si existen
let items = JSON.parse(localStorage.getItem('items')) || [];
// 3- grabar en LS
const saveLocalStorage = (items) => {
    localStorage.setItem('items', JSON.stringify(items))
};

const createHTML = items => {
  const html = items.map(item => {
    return `<li> ${item} </li>`
  }).join('');
  caja.innerHTML = html;
}

const init = () => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const item = input.value;
    input.value = '';

    items = [...items, item];

    saveLocalStorage(items);
    createHTML(items);
  })
  document.addEventListener('DOMContentLoaded', createHTML(items));
}

init();





/*5.Tenemos el siguiente array de objetos, 
    renderizar cada objeto en una card.*/
let peliculas = [
  {
    id: 1,
    titulo: 'El señor de los anillos: La comunidad del anillo',
    descripcion:
      'Un hobbit de la Comarca y ocho compañeros emprenden un viaje para destruir el poderoso Anillo Único y salvar la Tierra Media del Señor Oscuro Sauron.',
    director: 'Peter Jackson',
    anio: 2001,
    imagen:
      'https://m.media-amazon.com/images/M/MV5BMzgyNjdjOWMtMjAyYy00NzQ4LWIwYTQtZDk2ZDQzYWVlN2IwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_FMjpg_UX720_.jpg',
  },
  {
    id: 2,
    titulo: 'Volver al futuro',
    descripcion:
      'Marty McFly, un estudiante de secundaria de 17 años, es enviado accidentalmente treinta años al pasado en un DeLorean que viaja en el tiempo, inventado por su gran amigo, el excéntrico científico Doc Brown.',
    director: 'Robert Zemeckis',
    anio: 1985,
    imagen:
      'https://m.media-amazon.com/images/M/MV5BYjQxMTIyMWUtMmMyMS00MGNmLTkzNzktOTM2YzMyZmRjYTYzXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg',
  },
  {
    id: 3,
    titulo: 'Harry Potter y la piedra filosofal',
    descripcion:
      'Un niño huérfano se inscribe en una escuela de magia y hechicería, donde aprende la verdad sobre sí mismo, su familia y el terrible mal que acecha al mundo mágico.',
    director: 'Chris Columbus',
    anio: 2001,
    imagen:
      'https://m.media-amazon.com/images/M/MV5BMzFiZjhjODUtMWJhZi00ZDk5LThjY2ItZjNjYjc0OGVjY2FmXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg',
  },
  {
    id: 4,
    titulo: 'Spiderman',
    descripcion:
      'Al ser mordido por una araña modificada genéticamente, un chico de instituto tímido y estudioso adquiere habilidades de araña que al final tendrá que usar para luchar contra el mal como un superhéroe tras una tragedia familiar.',
    director: 'Sam Raimin',
    anio: 2002,
    imagen:
      'https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_FMjpg_UX511_.jpg',
  },
  {
    id: 5,
    titulo: 'Fight Club',
    descripcion:
      'Un oficinista insomne y un desentendido fabricante de jabones forman un club de lucha clandestino que se convierte en mucho más.',
    director: 'David Fincher',
    anio: 1999,
    imagen:
      'https://m.media-amazon.com/images/M/MV5BNzJhZjg3MWQtNDk1Zi00ZjMzLWI1ZjUtNmE2MDg0ZDU4MzZlXkEyXkFqcGdeQXVyMTAyOTE2ODg0._V1_.jpg',
  },
  {
    id: 6,
    titulo: 'El Origen',
    descripcion:
      'A un ladrón que roba secretos corporativos a través del uso de la tecnología de compartir sueños, se le da la tarea de implantar una idea en la mente de un jefe de una gran empresa.',
    director: 'Christopher "EL REY" Nolan',
    anio: 2010,
    imagen:
      'https://m.media-amazon.com/images/M/MV5BMTUzMzUyOTktNmYyNS00YTA1LWIxNmQtMGIzZDYxZGI3OTliXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg',
  },
];
const cards = document.getElementById('cards')

const renderCard = pelicula => {
  const { titulo, descripcion, director, anio, imagen } = pelicula
  return `
    <div class="card">
    <img src="${imagen}" alt="${titulo}" class="card-img">
    <div class="card-body">
        <h3>${titulo}</h3>
        <p>${descripcion}</p>
        <p>${director}</p>
        <p>${anio}</p>
    </div>
    </div>
    `;
};

const renderCards = peliculas => cards.innerHTML = peliculas.map(renderCard).join('');
window.addEventListener('DOMContentLoaded', renderCards(peliculas));
