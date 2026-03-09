// Vetores (Arrays)

const listaDeNomes = ['Marta', 'José', 'Maria'];

console.log("Exibindo todos os elementos:");
console.log(listaDeNomes);

console.log("\nExibindo apenas o primeiro elemento:");
console.log(listaDeNomes[0]);

console.log("\nAdicionando um elemento:");
listaDeNomes.push('Marília');
console.log(listaDeNomes);

console.log("\nAdicionando outro elemento:");
listaDeNomes.push('Marcela');
console.log(listaDeNomes);

// A partir do índice 2, remover apenas 1 elemento
console.log("\nRemovendo um elemento a partir do índice 2:");
listaDeNomes.splice(2, 1);
console.log(listaDeNomes);

// Remover o segundo elemento da lista
console.log("\nRemovendo o segundo elemento:");
listaDeNomes.splice(1, 1);
console.log(listaDeNomes);

console.log("\nRemovendo apenas o último elemento:");
listaDeNomes.pop();
console.log(listaDeNomes);

console.log("\nRemovendo apenas o primeiro elemento:");
listaDeNomes.shift();
console.log(listaDeNomes);