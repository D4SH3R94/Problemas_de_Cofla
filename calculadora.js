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
const potencia =(num1,exp)=>{
    let resultado = num1;
    for (let i = 1; i < exp; i++) {
        resultado = resultado * num1;
        }return resultado;
}
const raizCuadrada= (num1)=>{
    num1 = Math.sqrt(num1);
    return num1;
}
const raizCubica = (num1)=>{
    num1 = Math.cbrt(num1);
    return num1;
}

alert("Que calculo quieres hacer?");
let calculo = prompt("1- para sumar, 2- para restar, 3- para dividir, 4- para multiplicar, 5- para raiz cuadrada, 6- para raiz cubica, 7- para potenciacion");

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
}else if(calculo == 5){
    alert("De que numero quieres encontrar la raiz");
    valor1 = prompt("Diga el numero");
    let resultado = raizCuadrada(valor1);
    document.write(resultado);
}else if(calculo == 6){
    alert("De que numero quieres encontrar la raiz cubica");
    valor1 = prompt("Diga el numero");
    let resultado = raizCubica(valor1);
    document.write(resultado);
}else if(calculo == 7){
    alert("Diga el numero y el exponente");
    valor1 = prompt("Diga el numero base");
    valor2 = prompt("Diga el numero del exponente")
    let resultado = potencia(valor1,valor2);
    document.write(resultado);
}else{
    alert("Por favor haga un calculo correcto");
}
}
calculadora()