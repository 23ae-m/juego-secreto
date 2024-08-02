let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

//asigna texto a un elemento de html
function asignarTextoElemento(elemento, texto) {
    let elementohtml = document.querySelector(elemento);
    elementohtml.innerHTML = texto;
    return;
}

//prueba click desde el botón

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto) {
        //El usuario acertó
        asignarTextoElemento('p',`acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','el número secreto es menor');
        } else {
            asignarTextoElemento('p','el número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja () {
    document.querySelector('#valorUsuario').value = '';
    return
}

//genera número aleatorio
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','ya se sortearon todos los números posibles');
    } else {

        //si el numero generado está incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    //texto asignado a cada punto de html
    asignarTextoElemento('h1','el juego del número secreto');
    asignarTextoElemento('p',`indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    return;
}
function reiniciarJuego () {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalos de numeros
    //generar numero aleatorio
    //inicializar el número de intentos
    condicionesIniciales();
    //deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    return;
}
 
condicionesIniciales();