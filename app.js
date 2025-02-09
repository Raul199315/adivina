let numeroSecreto = 0;
let numeroMaximo = 0;
let intento = 0;
let lista = [];


function generarNumero(){
    let numero = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numero);
    console.log(lista)
    //si el numero generado esta en la lista
    if(lista.length == numeroMaximo){
        textos('h1',"ya se sortearon todos los numeros")
    }else{
    if(lista.includes(numero)){
        return generarNumero()
    }else{
        lista.push(numero)
        return numero;
    }
}
    
}


function validaIntento(){
    let numeroUsuario = document.querySelector('input').value;

    if(numeroUsuario == numeroSecreto){
        textos('h1',"Acertaste El Numero")
        
    }else{
        textos('h1',`${numeroUsuario} no es el numero Secreto`)
    }
    intento++
    
    

}


function textos(tag,tx){
    let texto= document.querySelector(tag)
    texto.innerHTML = tx

}

function nuevoJuego(){
    inicioDeJuego();
}

function inicioDeJuego(){
    numeroSecreto = generarNumero()
    
    textos('p',`para jugar ingresa un numero entre 1 y ${numeroMaximo}`);

}

function dificultad(){
    let nivel = document.querySelector('select').value;
    numeroMaximo = nivel
    console.log(numeroMaximo)
    textos('p',`para jugar ingresa un numero entre 1 y ${numeroMaximo}`);
}

inicioDeJuego();
