//Obtenemos numero 1
function numero1(){
    let x = prompt("Valor de numero 1");
    //El ID "x" en HTML sera el valor que nos da el usuario y se guarda en x como caracter

    document.getElementById("x").innerHTML = x;
}

//Obtenemos numero 2
function numero2(){
  
    let y = prompt("Valor de numero 2");
     //El ID "y" en HTML sera el valor que nos da el usuario y se guarda en y como caracter
    document.getElementById("y").innerHTML = y;
}

//FUNCION DE SUMA
function suma(){
    
    let valoruno = parseInt(document.getElementById("x").innerHTML,10);
    
    let valordos = parseInt(document.getElementById("y").innerHTML,10);
   
    document.getElementById("Resultado").innerHTML = valoruno + valordos;
}



function resta(){
    let valoruno = document.getElementById("x").innerHTML;
    let valordos = document.getElementById("y").innerHTML;
    //RESTANDO
    document.getElementById("Resultado").innerHTML = parseInt(valoruno,10) - parseInt(valordos,10);
}

function multiplicacion(){
    let valoruno = document.getElementById("x").innerHTML;
    let valordos = document.getElementById("y").innerHTML;
    document.getElementById("Resultado").innerHTML = parseInt(valoruno,10) * parseInt(valordos,10);
}

function division(){
    let valoruno = document.getElementById("x").innerHTML;
    let valordos = document.getElementById("y").innerHTML;
    document.getElementById("Resultado").innerHTML = parseInt(valoruno,10) / parseInt(valordos,10);
}