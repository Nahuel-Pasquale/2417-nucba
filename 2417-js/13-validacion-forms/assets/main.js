// declarar variables
const form = document.getElementById('form');
const nameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passInput = document.getElementById('password');
const phoneInput = document.getElementById('phone');

// evaluamos username
const checkUsername = () => {
  let valid = false;
  const min = 3;
  const max = 25;
  const username = nameInput.value.trim();
  if(isEmpty(username)){
    showError(nameInput,'El nombre es obligatorio');
  } else if(!isBetween(username.length, min, max)) {
    showError(nameInput,`El nombre debe tener entre ${min} y ${max}`);
  } else {
    showSuccess(nameInput)
    valid = true;
  }
  return valid
}

// evaluamos Email
const checkEmail = () => {
  let valid = false;
  const emailValue = emailInput.value.trim();
  if(isEmpty(emailValue)){
    showError(emailInput, 'El email es obligatorio');
  } else if(!isEmailValid(emailValue)){
    showError(emailInput, 'El email no es valido');
  } else {
    showSuccess(emailInput);
    valid = true;
  }
  return valid
}

// evaluar password
const checkPassword = () => {
  let valid = false;
  const password = passInput.value.trim();
  if(isEmpty(password)){
    showError(passInput, 'La contraseña es obligatoria')
  } else if(!isPassValid(password)){
    showError(passInput, 'La contraseña debe tener al menos 8 caracteres, entre ellos una mayuscula, un número y un caracter especial')
  } else {
    showSuccess(passInput);
    valid = true;
  }
  return valid;
}

// evaluar phone
const checkPhone = () => {
  let valid = false;
  const phoneValue = phoneInput.value.trim();
  if(!isPhoneValid(phoneValue)) {
    showError(phoneInput, 'El telefono ingresado es incorrecto')
  } else {
    showSuccess(phoneInput);
    valid = true;
  }
  return valid;
}


const isPhoneValid = (phone) => {
  const re = /^[0-9]{10}$/;
  return re.test(phone)
}

const isPassValid = (pass) => {
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
  return re.test(pass);
}

const isEmailValid = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

const isEmpty = (value) => value === '';

const isBetween = (length, min, max) => length < min || length > max ? false : true;

const showError = (input, message) => {
  const formField = input.parentElement;
  formField.classList.remove('success')
  formField.classList.add('error')
  const error = formField.querySelector("small");
  error.textContent = message;
}
const showSuccess = (input) => {
  const formField = input.parentElement;
  formField.classList.remove('error')
  formField.classList.add('success')
  const error = formField.querySelector("small");
  error.textContent = '';
}



form.addEventListener('submit', (e) => {
  e.preventDefault();
  // valido cada input
  const isUsernameValid = checkUsername();
  const isEmailValid = checkEmail();
  const isPasswordValid = checkPassword();
  const isPhoneValid = checkPhone();

  console.log(isUsernameValid)
  console.log(isEmailValid)
  console.log(isPasswordValid)
  console.log(isPhoneValid)
  // valido el form
  const isFormValid = isUsernameValid && isEmailValid && isPasswordValid && isPhoneValid;
  // const isFormValid = checkUsername() && checkEmail() && checkPassword() && checkPhone();
  if(isFormValid) {
    form.submit();
  }
})

const debounce = (fn, delay = 1000) => {
  let timeoutId;
  return (...args) => {
    // cancelar el timer anterior
    if(timeoutId) clearTimeout(timeoutId);

    //seteamos un nuevo timer
    timeoutId = setTimeout(() => {
      fn.apply(null, args);
    }, delay)
  };
};

form.addEventListener(
  "input",
  debounce((e) => {
    switch (e.target.id){
      case 'username':
        checkUsername();
        break;
      case 'email':
        checkEmail();
        break
      case 'password':
        checkPassword();
        break
      case 'phone':
        checkPhone();
        break
    }
  })
)
