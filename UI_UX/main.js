"use strict";
/*let nombre ="Juanito Banana";
const pi=3.1416;
var Ciudad="CDMX";

console.log(nombre,pi,Ciudad);

let texto="hola";
let numero=12;
let numero2=1;
let bool=true;

console.log(typeof texto,typeof numero,typeof numero2,typeof bool);

let nombre2 = prompt("¿Como te llamas?");
alert("bienvenide "+nombre2);

let num = prompt("ingrese la calificacion");
if(num>=90){
      alert ("ya pasaste facil");
}
else if (num>=80){
      alert("pasaste bien")
}
else if (num>=70){
      alert("pasaste bien")
}
else if (num>=60){
      alert("pasaste")
}
else if (num<=59){
      alert("reprobaste")
}

console.log(5===5);


let usuario = prompt("admin");
let clave =prompt("12345");

if (usuario ==="admin" && clave ==="12345"){
      alert("acceso permitido");
}else {
      alert("nel")
}

let dia = prompt("ingrese un dia");

switch (dia.toLowerCase()){
      case "lunes":
            alert("inicio de semana");
            break;
      case "martes":
            alert("me martes");
            break;
      case "miercoles":
            alert("mitad de semana");
            break;
      case "jueves":
            alert("ya mero");
            break;
      default:
            alert("parametro no permitido");
}
*/

let numero = prompt("ingrese un numero para determinar si es par o no");
 if (numero/2===Math.floor(numero/2)){
      alert("El numero es par")
 }else{
      alert("El numero es impar")
 }

let num1 = parseFloat(prompt("Ingresa el primer número:"));
let num2 = parseFloat(prompt("Ingresa el segundo número:"));

let suma = num1 + num2;
let resta = num1 - num2;
let multiplicacion = num1 * num2;
let division = num2 !== 0 ? num1 / num2 : "Error: División por cero";

alert("Resultados:\n" +
      "Suma: " + suma + "\n" +
      "Resta: " + resta + "\n" +
      "Multiplicación: " + multiplicacion + "\n" +
      "División: " + division);
