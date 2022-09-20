// console.log(document)
// console.log(window)


// const titulo = document.getElementById("titulo");
// const titulos = document.getElementsByClassName("title");
// const parrafos = document.getElementsByClassName("parrafo")
// const parrafo = document.getElementsByTagName("p")

const parrafos = document.querySelectorAll(".parrafo")
const parrafo = document.querySelector("p")


// console.log(parrafo)

// const arrTitulos = [...parrafos]

// console.log('ARRAY DE ELEMENTOS ==>',arrTitulos)

// parrafos.forEach(e => console.log(e))

// parrafo.innerHTML = "<span> Somos los mejores <b> de la camada </b> </span>"
// parrafo.innerText = "No somos mas los mejores"

// console.log(parrafo)

const lista = document.getElementById("lista-dinamica");

// console.log(lista)

// creamos los li
const li = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");

//agregamos texto a los li
// li.textContent = "mi LI dinamico"
// li2.textContent = "mi LI2 dinamico"
// li3.textContent = "mi LI3 dinamico"

// incorporar los li a nuestra lista
// lista.appendChild(li)
// lista.appendChild(li2)
// lista.appendChild(li3)

// const arrAlumnos = ["Ramiro", "Joaquin", "Nicolas", "Bruno", "Mariano" ,"Elezier"]

// arrAlumnos.forEach((e) => {
//     const li = document.createElement("li");
//     li.textContent = "Nombre: " + e;
//     console.log(li.textContent);
//     lista.appendChild(li)
// })

// setTimeout 1-callback, 2-tiempo
const url = "https://www.google.com/"

setTimeout(() => {
    window.open(url)
}, 5000)
// setInterval(() => {
//     console.log('Hola')
// }, 1000)



// console.log(window.location)
