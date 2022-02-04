const sumar = (num1,num2)=>{
    return parseInt(num1) + parseInt(num2);
}
const restar = (num1,num2)=>{
    return parseInt(num1) - parseInt(num2);
}
const dividir = (num1,num2)=>{
    return parseInt(num1) / parseInt(num2);
}
const multiplicar = (num1,num2)=>{
    return parseInt(num1) * parseInt(num2);
}

alert("Que calculo quieres hacer?");
let calculo = prompt("1- para sumar, 2- para restar, 3- para dividir, 4- para multiplicar");

const calculadora = ()=>{

if (calculo == 1){
    alert("Que numeros quieres sumar?");
    valor1 = prompt("El primer numero es?");
    valor2 = prompt("EL segundo numero es?");
    let resultado = sumar(valor1,valor2);
    document.write(resultado);
}else if (calculo == 2){
    alert("Que numeros quieres restar?");
    valor1 = prompt("El primer numero es?");
    valor2 = prompt("EL segundo numero es?");
    let resultado = restar(valor1,valor2);
    document.write(resultado);
}else if (calculo == 3){
    alert("Que numeros quieres dividir?");
    valor1 = prompt("El primer numero es?");
    valor2 = prompt("EL segundo numero es?");
    let resultado = dividir(valor1,valor2);
    document.write(resultado);
}else if (calculo == 4){
    alert("Que numeros quieres multiplicar?");
    valor1 = prompt("El primer numero es?");
    valor2 = prompt("EL segundo numero es?");
    let resultado = multiplicar(valor1,valor2);
    document.write(resultado);
}else{
    alert("Por favor haga un calculo correcto");
}
}
calculadora()