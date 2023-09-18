const botonNumeros = document.getElementsByName('data-number');
const botonOperador = document.getElementsByName('data-operador');
const botonIgual = document.getElementsByName('data-igual')[0];
const botonDel = document.getElementsByName('data-del')[0];
let resultado = document.getElementById('resultado');
let operacionActual = '';
let operacionAnterior = '';
let operacion = undefined;

botonNumeros.forEach(function(boton){
    boton.addEventListener('click', function(){
        agregarNumero(boton.innerText);
    })
});

botonOperador.forEach(function(boton){
    boton.addEventListener('click', function(){
        seleccionarOperacion(boton.innerText);
    })
})

botonIgual.addEventListener('click', function(){
    calcular();
    actualizarDisplay();
});

botonDel.addEventListener('click', function(){
    clear();
    actualizarDisplay();
})

function seleccionarOperacion(op){
    if(operacionActual === '') return;
    if(operacionAnterior !== ''){
        calcular();
    }
    operacion = op.toString();
    operacionAnterior = operacionActual;
    operacionActual = '';
}

function calcular(){
    let calculo;
    const anterior = parseFloat(operacionAnterior);
    const actual = parseFloat(operacionActual);
    if(isNaN(anterior) || isNaN(actual)) return;
    switch(operacion){
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case 'x':
            calculo = anterior * actual;
            break;
        case '/':
            calculo = anterior / actual;
            break;
        default:
            return;
    }
    operacionActual = calculo;
    operacion = undefined;
    operacionAnterior = '';
}

function agregarNumero(numero){
    operacionActual = operacionActual.toString() + numero.toString();
    actualizarDisplay();
}

function clear(){
    operacionActual = '';
    operacionAnterior = '';
    operacion = '';
}

function actualizarDisplay(){
    resultado.value = operacionActual;
}

clear();
