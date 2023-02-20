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

console.log(clc.yellow('¡Bienvenido a la calculadora!'));

const operaciones = ['Sumar', 'Restar', 'Multiplicar', 'Dividir', 'Raíz cuadrada'];
const index = readlineSync.keyInSelect(operaciones, 'Seleccione una operación:');
const operacion = operaciones[index];

let resultado;

if (operacion === 'Raíz cuadrada') {
  const num = readlineSync.questionFloat('Ingrese el número: ');
  resultado = raizCuadrada(num);
} else {
  const num1 = readlineSync.questionFloat('Ingrese el primer número: ');
  const num2 = readlineSync.questionFloat('Ingrese el segundo número: ');

  switch (operacion) {
    case 'Sumar':
      resultado = sumar(num1, num2);
      break;
    case 'Restar':
      resultado = restar(num1, num2);
      break;
    case 'Multiplicar':
      resultado = multiplicar(num1, num2);
      break;
    case 'Dividir':
      resultado = dividir(num1, num2);
      break;
    default:
      console.log(clc.red('Operación inválida'));
      return;
  }
}

if (resultado) {
  console.log(clc.green(`El resultado es: ${resultado}`));
}
