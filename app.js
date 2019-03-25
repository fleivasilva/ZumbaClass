//Arreglo de 30 datos que representa las vacantes de curso
var cupos = new Array(30);
for (var i = 0; i < cupos.length; i++) {
    cupos[i] = Math.random() < .5;
    console.log(cupos[i]);
}
console.log(cupos.filter(Boolean).length);
