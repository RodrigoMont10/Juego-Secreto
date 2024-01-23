//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Juego del número secreto'

//let parrafo = document.querySelector('p')
//parrafo.innerHTML = 'Indica un número del 1 al 10'

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento)
    elementoHTML.innerHTML = texto
    return;
}

function verificarIntento () {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value)
    /*console.log(intentos)
    console.log(typeof(numeroDeUsuario))
    console.log(numeroSecreto)
    console.log(typeof(numeroSecreto))
    console.log(numeroDeUsuario)
    console.log(numeroDeUsuario == numeroSecreto)*/

    if(numeroDeUsuario == numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`)
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        //el usuario no acertó
        if(numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor')
        } else {
            asignarTextoElemento('p','El número secreto es mayor')
        }
        intentos++
        limpiarCaja()
    }
    
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = ""
    //let valorCaja = document.querySelector('#valorUsuario')
    //valorCaja.value = ''
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1

    console.log(numeroGenerado)
    console.log(listaNumerosSorteados)
    //que pasa si ya sorteamos todos los numeros?
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','ya se sortearon todos los números posibles')
    } else {
    //estas en la lista numero generado??
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto()
        } else {
            listaNumerosSorteados.push(numeroGenerado)
            return numeroGenerado
        }
    }
}
function condicionesIniciales(){
    asignarTextoElemento('h1','juego del número secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja()
    //indicar mensaje de intervalo de numeros
    condicionesIniciales()
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled',true)
}

condicionesIniciales()