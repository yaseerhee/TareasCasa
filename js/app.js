var tarea1 = "PLATOS DESAYUNO";
var tarea2 = "PLATOS COMIDA";
var tarea3 = "PLATOS CENA";
var tarea4 = "SALÓN MAÑANA/TARDE";
var tarea5 = "HACER LA COMPRA";
var tarea6 = "BARRER/FREGAR";
var tarea7 = "BAÑO";
var tarea8 = "RECOGER LA MESA DESAYUNO";
var tarea9 = "RECOGER LA MESA COMIDA";
var tarea10 = "RECOGER LA MESA CENA";
var tarea11 = "LAVADORA";
var tarea12 = "COLADA";

var tareas = [
  tarea1,
  tarea2,
  tarea3,
  tarea4,
  tarea5,
  tarea6,
  tarea7,
  tarea8,
  tarea9,
  tarea10,
  tarea11,
  tarea12,
];

var tareasAleatorio = tareas.sort(function () {
  return Math.random() - 1;
});

document.getElementById("tareaA1").innerHTML = tareasAleatorio[0];
document.getElementById("tareaA2").innerHTML = tareasAleatorio[1];
document.getElementById("tareaA3").innerHTML = tareasAleatorio[2];
document.getElementById("tareaY1").innerHTML = tareasAleatorio[3];
document.getElementById("tareaY2").innerHTML = tareasAleatorio[4];
document.getElementById("tareaY3").innerHTML = tareasAleatorio[5];
document.getElementById("tareaI1").innerHTML = tareasAleatorio[6];
document.getElementById("tareaI2").innerHTML = tareasAleatorio[7];
document.getElementById("tareaI3").innerHTML = tareasAleatorio[8];
document.getElementById("tareaS1").innerHTML = tareasAleatorio[9];
document.getElementById("tareaS2").innerHTML = tareasAleatorio[10];
document.getElementById("tareaS3").innerHTML = tareasAleatorio[11];
