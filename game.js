// 1. crear una funcion que eliga una de las opciones aleatoriamente.                                          2.una funcion para conseguir una eleccion del usuario    3.crear una variable para el seguimiento del puntaje     4.tiene que poder jugarse 5 rondas//

//PUEDE QUE NECESITE USAR ESTO EN SU DEVIDO MOMENTO "toLowerCase"//

//esta funcion te da una opcion aleatoria entre las tres posibilidades//
function getComputerChoice(Array) {
    var indiceAleatorio = Math.floor(Math.random() * Array.length);
    return Array[indiceAleatorio];
}

var opciones = ["Piedra", "Papel", "Tijera"];
var contra = getComputerChoice(opciones);


//esta funcion le pedira al usuario que elija entre piedra, papel o tijera//
function getHumanChoice(prompt) {
    let choise = prompt("Piedra, Papel p Tijera?");
    return choise
}
console.log(getHumanChoice(prompt))