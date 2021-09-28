// no se recomienda usar el new array
// const arreglo = new Array();
const arreglo = [1, 2, 3, 4];

// no se recomienda usar el .push por que modifica el objeto principal
// arreglo.push(1);
// arreglo.push(2);
// arreglo.push(3);
// arreglo.push(4);

let arreglo2 = [...arreglo, 5];
// arreglo.push(5);

const arreglo3 = arreglo2.map(function (numero) {
  return numero * 2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
