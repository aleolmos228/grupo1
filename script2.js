const cardIndex = document.querySelector('#newCard');

const traerStorage = JSON.parse(localStorage.getItem('contenido')) || [];


const nombre=document.querySelector('#nombre').value;
const apellido=document.querySelector('#apellido').value;
const email=document.querySelector('#email').value;
const password1=document.querySelector('#password1').value;
const password2=document.querySelector('#password2').value;
let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];



function mostrarStorage (){
    traerStorage.forEach(function(item,index){
            cardIndex.innerHTML += `
            <div class="card" style="width: 18rem;">
            <img src="${item.imagen}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${item.modelo}</h5>
              <p class="card-text">${item.estado}</p>
              <p>${item.precio}</p>
            </div>
          </div>`
        }
    );
}

mostrarStorage();

function guardar() { 
  const nombre=document.querySelector('#nombre').value;
  const apellido=document.querySelector('#apellido').value;
  const email=document.querySelector('#email').value;
  const password1=document.querySelector('#password1').value;
  const password2=document.querySelector('#password2').value;
        if(password1==password2){
        usuarios.push({
          nombre: nombre,
          apellido: apellido,
          email: email,
          password1: password1,
          password2: password2
        });}else{ alert("Fallo validacion de Contraseña")}
  localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

function ingreso() {
  const emaila=document.querySelector('#emaila').value;
  const passworda=document.querySelector('#passworda').value;
  console.log(passworda);
  
}
