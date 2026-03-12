// Exemplo com vetor de nomes.
const listaDeNomes= ["Ana", "Maria","Joana", "José", "Marta" ]


// Exemplo com vetor de numeros.
const listaDeNumeros = [1,2,3,4,5,7,8,9,10]

// Vetor de objetos com dados de nome e idade.

const listaDeUsuarios = [
    {nome: "Ana", idade: 25},
    {nome:"Maria", idade: 35},
    {nome: "Joana", idade: 45},
    {nome: "José", idade: 15} ,
    {nome: "Marta", idade: 12}
]

// Percorrendo e exibindo os elementos do vetor.
// For Eatch é uma função com laço de repetição.
console.log("Exibindo todos os usuarios do vetor.")
// Use as {} caso precise de mais uma linha.
// Nesse caso não precisa, mas vamos usar.
listaDeUsuarios.forEach (usuario => {
    console.log(`${usuario.nome} tem ${usuario.idade} anos.`)
})


// Como os antigos.
console.log("\nExibindo todos os usuarios do vetor.")
for (let i = 0; i < listaDeUsuarios.length; i++) {
console.log(`${listaDeUsuarios[i].nome} tem ${listaDeUsuarios[i].idade} anos.`)
}

console.log("\nFiltrando maiores de 18 anos.")
const maioridade = listaDeUsuarios.filter(usuario => usuario.idade >= 18)
// Use as {} caso precise de mais uma linha.
// Nesse caso não precisa, por isso não vamos usar.
maioridade.forEach(usuario =>
    console.log(`${usuario.nome} tem ${usuario.idade} anos.`))
    

console.log("\nFiltrando menores de 18 anos.")
    const menoridade = listaDeUsuarios.filter(usuario => usuario.idade < 18)
    menoridade.forEach(usuario =>
    console.log(`${usuario.nome} tem ${usuario.idade} anos.`)
    )
    
    
console.log("\nNa lista de números, filtre e mostre apenas numeros pares.")

const pares = listaDeNumeros.filter(numero => numero % 2 === 0)
console.log(pares)

    
console.log("\nNa lista de nomes, mostre todos os nomes com forEach.")
listaDeNomes.forEach(usuario=> {
    console.log(usuario)
})

console.log("\nNa lista de usuários, mostre apenas os nomes de usuários.")
const nomes = listaDeUsuarios.map(u => u.nome)
nomes.forEach(nome => console.log(`Nome: ${nome}`))

console.log("\nNa lista de usuários, encontre um usuário.")
const usuarioEncontrado = listaDeUsuarios.find(u => u.nome === "Ana")
console.log(`Nome: ${usuarioEncontrado.nome} \nIdade: ${usuarioEncontrado.idade}`)


console.log("\nNa lista de usuários, encontre um usuário com idade de 45 anos.")
const usuarioEncontradoIdade = listaDeUsuarios.find(u => u.idade === 45)
console.log(`Nome: ${usuarioEncontradoIdade.nome} \nIdade: ${usuarioEncontradoIdade.idade}`)


console.log("\nNa lista de usuários, somando todas as idades.")
const somaIdades = listaDeUsuarios.reduce((total, usuario) => total + usuario.idade, 0)
console.log(somaIdades)


