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

function aleatorio() {
  var i, j, k;
  for (i = tareas.length; i; i--) {
    j = Math.floor(Math.random() * i);
    k = tareas[i - 1];
    tareas[i - 1] = tareas[j];
    tareas[j] = k;
  }

  document.getElementById("tareaA1").innerHTML = tareas[0];
  document.getElementById("tareaA2").innerHTML = tareas[1];
  document.getElementById("tareaA3").innerHTML = tareas[2];
  document.getElementById("tareaY1").innerHTML = tareas[3];
  document.getElementById("tareaY2").innerHTML = tareas[4];
  document.getElementById("tareaY3").innerHTML = tareas[5];
  document.getElementById("tareaI1").innerHTML = tareas[6];
  document.getElementById("tareaI2").innerHTML = tareas[7];
  document.getElementById("tareaI3").innerHTML = tareas[8];
  document.getElementById("tareaS1").innerHTML = tareas[9];
  document.getElementById("tareaS2").innerHTML = tareas[10];
  document.getElementById("tareaS3").innerHTML = tareas[11];
}

aleatorio();
