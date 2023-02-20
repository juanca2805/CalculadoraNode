const clc = require('cli-color');
const readlineSync = require('readline-sync');

function sumar(num1, num2) {
  return num1 + num2;
}

function restar(num1, num2) {
  return num1 - num2;
}

function multiplicar(num1, num2) {
  return num1 * num2;
}

function dividir(num1, num2) {
  return num1 / num2;
}

function raizCuadrada(num) {
  return Math.sqrt(num);
}

function potencia(base, exponente) {
  return Math.pow(base, exponente);
}

function logaritmoBase10(num) {
  return Math.log10(num);
}

function logaritmoNatural(num) {
  return Math.log(num);
}

console.log(clc.yellow('¡Bienvenido a la calculadora!'));

const operaciones = ['Sumar', 'Restar', 'Multiplicar', 'Dividir', 'Raíz cuadrada', 'Potencia', 'Logaritmo base 10', 'Logaritmo natural'];
const index = readlineSync.keyInSelect(operaciones, 'Seleccione una operación:');
const operacion = operaciones[index];

let resultado;

switch (operacion) {
  case 'Raíz cuadrada':
    const num = readlineSync.questionFloat('Ingrese el número: ');
    resultado = raizCuadrada(num);
    break;
  case 'Potencia':
    const base = readlineSync.questionFloat('Ingrese la base: ');
    const exponente = readlineSync.questionFloat('Ingrese el exponente: ');
    resultado = potencia(base, exponente);
    break;
  case 'Logaritmo base 10':
    const num1 = readlineSync.questionFloat('Ingrese el número: ');
    resultado = logaritmoBase10(num1);
    break;
  case 'Logaritmo natural':
    const num2 = readlineSync.questionFloat('Ingrese el número: ');
    resultado = logaritmoNatural(num2);
    break;
  default:
    const num3 = readlineSync.questionFloat('Ingrese el primer número: ');
    const num4 = readlineSync.questionFloat('Ingrese el segundo número: ');

    switch (operacion) {
      case 'Sumar':
        resultado = sumar(num3, num4);
        break;
      case 'Restar':
        resultado = restar(num3, num4);
        break;
      case 'Multiplicar':
        resultado = multiplicar(num3, num4);
        break;
      case 'Dividir':
        resultado = dividir(num3, num4);
        break;
      default:
        console.log(clc.red('Operación inválida'));
        return;
    }
}

if (resultado) {
  console.log(clc.green(`El resultado es: ${resultado}`));
}
