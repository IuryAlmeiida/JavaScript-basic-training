var pens;
pens = ["red", "blue", "green", "orange"];

console.log("Before: ", pens);

// PROPRIEDADES:
// Obtenha uma propriedade de um objeto pelo nome:
console.log("Array length: ", pens.length);

// METODOS:
// INVERTA A MATRIZ:
// pens.reverse();

// Remova o primeiro valor da matriz:
// pens.shift();

// Adicione uma lista de valores separados por vírgula à frente da matriz:
// pens.unshift("purple", "black");

// Remova o último valor da matriz:
// pens.pop();

// Adicione uma lista de valores separados por vírgula ao final da matriz:
// pens.push("pink", "prussian blue");

// Encontre a posição especificada (pos) e remova n número de itens da matriz. Argumentos: pens.splice(pos,n):
// pens.splice(3, 2) // Inicia no segundo item e remove dois itens.

// console.log("After: ", pens);

// Crie uma cópia de uma matriz. Normalmente atribuído a uma nova variável:
// var newPens = pens.slice();
// console.log("New pens: ", newPens);

// Retorna o primeiro elemento que corresponde ao parâmetro de pesquisa após a posição de índice especificada. O padrão é a posição de índice 0. Argumentos: pens.indexOf(search, index):
// var result = pens.indexOf("orange", 1);
// console.log("The search result index is: ", result);

// Retorna os itens em uma matriz como uma string separada por vírgulas. O argumento separador pode ser usado para alterar a vírgula para outra coisa. Argumentos: pens.join(separator):
var arrayString = pens.join();
console.log("String from array: ", arrayString);

// MDN documentation for Array:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
