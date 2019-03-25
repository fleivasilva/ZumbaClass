//Arreglo de 30 datos que representa las vacantes de curso
let cupos: boolean[] = new Array(30)

//Listar estado de clase
for (var i = 0; i < cupos.length; i++) {
    cupos[i] = Math.random() < .5;
    console.log(cupos[i])
}

//Contar cupos disponibles en una clase
let totaldisponibles: number = cupos.filter(Boolean).length;
console.log(totaldisponibles);

