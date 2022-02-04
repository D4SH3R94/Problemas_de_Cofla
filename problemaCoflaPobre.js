let free = false;

const validarEntrada = (time)=>{
    let edad = prompt("Que edad tienes?");
    console.log(time)
    if (edad >= 18){
        if(time >= 2 && time <= 7 && free == false){
            alert(`Son las ${time}:00hr. Puedes pasar gratis eres el primero`);
            free = true;
        }else if(time < 2 || time > 7){
            alert("Esta cerrado la nueva fiesta empieza a las 2:00 am.");
        }else{
            alert(`Son las ${time}:00hr. Tienes que pagar, ya entro el primero!`);
        }
    }else {
        alert("Eres menor de edad chamaco. No puedes entrar!");
    }
}

validarEntrada(22);
validarEntrada(23);
validarEntrada(1);
validarEntrada(12);
validarEntrada(2);
validarEntrada(3);
validarEntrada(10);
