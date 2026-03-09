// Exercicio

// Crie um vetor com nome de seus familiares.
// Com seis nomes.

// Use todos os comandos vistos em vetores após criar a lista.

const listaDeNomes = ['Lilian','Dourival','Filipe, Jane']

console.log("Exibindo todos os elementos:")
console.log(listaDeNomes)

console.log("Exibindo apenas o primeiro elemento:")
console.log(listaDeNomes[0])

console.log("Adicionando um elemento:")
listaDeNomes.push('Raimunda')
console.log(listaDeNomes)



console.log("Adicionando outro elemento:")
listaDeNomes.push('Alice')
console.log(listaDeNomes)

console.log("\nRemovendo elemento a partir do indice 2:")
listaDeNomes.splice(2, 1)
console.log(listaDeNomes)

console.log("\nRemovendo o segundo elemento:")
listaDeNomes.splice(1, 1)
console.log(listaDeNomes)

console.log("\nRemovendo apenas o ultimo elemento:")
listaDeNomes.pop()
console.log(listaDeNomes)

console.log("\nRemovendo apenas o primeiro elemento:")
listaDeNomes.shift()
console.log(listaDeNomes)