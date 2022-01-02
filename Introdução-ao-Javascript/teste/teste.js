// Comentários de uma linha (ctrl + /)
/* Comentários
de
várias   (selecionar tudo e apertar ctrl + /)
linhas */

var x = 0;
;

// constante é em letra maiúscula

// os parênteses servem para declarar atributos/parâmetros da função

function soma(a,b) {
  console.log(a + b);
  return a + b;
}

soma(3,5);

console.log('Hello World!');

function returnEvenValues(array) {
  let evenNuns = [];
  for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 == 0) {
    evenNuns.push(array[i]);
  }
  else {
    console.log(`${array[i]} não é par`)
  }
  }
  console.log('Os número pares são: ', evenNuns);
}

let array = [1, 2, 4, 5, 7, 8];

returnEvenValues(array);
