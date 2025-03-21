// 1. crear una funcion que eliga una de las opciones aleatoriamente.                                          2.una funcion para conseguir una eleccion del usuario    3.crear una variable para el seguimiento del puntaje     4.tiene que poder jugarse 5 rondas//


function Randomlista(Array) {
    var indiceAleatorio = Math.floor(Math.random() * Array.length);
    return Array[indiceAleatorio];
}

var opciones = ["Piedra", "Papel", "Tijera"]
console.log(Randomlista(opciones))
