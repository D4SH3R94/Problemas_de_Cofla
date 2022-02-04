let cantidadEstudiantes = prompt("Cuantos alumnos son?");
let alumnosTotales = [];


for(a = 0; a< cantidadEstudiantes; a++) {
    alumnosTotales[a] = [prompt("Nombre del alumno "  +  (a + 1)), 0];
}

const pasarLista = (nombre, p) =>{
    let presencia = prompt(nombre);
    if (presencia == "p" || presencia == "P"){
        alumnosTotales[p][1]++;
    }
}

for(a = 0; a < 30; a++){
    for (estudiante in alumnosTotales){
        pasarLista(alumnosTotales[estudiante][0],estudiante);
    }
}

for (estudiante in alumnosTotales){
    let resultado = `${alumnosTotales[estudiante][0]}:<br>
             Presencias:${alumnosTotales[estudiante][1]}<br>
             Ausencias:${30 - alumnosTotales[estudiante][1]} `;
    if(30-alumnosTotales[estudiante][1] > 18){
        resultado += "Estas suspenso por Inasistencia <br>";
    }else{
        resultado += "<br><br>"
    }document.write(resultado);
}
