// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Definicion de variables a utilizar (globales)
let listaAmigos = [];

//Agregamos una funcion para agregar nombres a la lista 
function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;
    if (nombre === ""){
        alert('Por favor, ingresa un nombre válido');
        return;
    }
    if(listaAmigos.length === 0){

    listaAmigos.push(nombre);
    document.getElementById ("listaAmigos").innerHTML += `<li>${nombre}</li>`;
    document.getElementById("amigo").value = '';
} else {
    if (actualizarLista(nombre)){
        alert("el nombre ingresado ya fue registrado");
        document.getElementById("amigo").value = '';
    }else{
        listaAmigos.push(nombre);
    document.getElementById ("listaAmigos").innerHTML += `<li>${nombre}</li>`;
    document.getElementById("amigo").value = '';
    }
}
}
// Funcion para actualizar lista de amigos y que no se repitan los nombres
function actualizarLista(nombre){
let amigoRepetido = false; 
let n = 0;
    for (let i = 0 ; i < listaAmigos.length; i++){
       if (listaAmigos[i] === nombre){
        return true;}
       }
       return false;
    }

    



// Utilizamos una función para realizar el sorteo de manera aleatoria
function sortearAmigo(){
    if(listaAmigos.length === 0){
        alert('no hay nombres en la lista de amigos');
        return;
    }
    let indiceAleatorio = Math.floor(Math.random()*listaAmigos.length);
    let amigoSorteado = listaAmigos[indiceAleatorio];

    document.getElementById('resultado').innerHTML =  `El amigo secreto es : ${amigoSorteado}`;
}

