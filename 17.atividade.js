const listaDeAlunos = [
    {nome: "Ana", nota: 5.0 } ,
    {nome: "Bruno", nota: 10.0 } ,
    {nome: "Carla", nota: 2.0 } ,
    {nome: "Andrea", nota: 7.0 } ,
    {nome: "Marta", nota: 6.0 } ,
    
];

console.log("Encontre a aluna Marta e mostra o nome e a média dela.")
const AlunaEncontrada = listaDeAlunos.find(aluna => aluna.nome === "Marta")
console.log(`Nome: ${AlunaEncontrada.nome} \nMédia: ${AlunaEncontrada.nota}`)


console.log("Mostre a média geral da turma.")
listaDeAlunos.forEach (alunos => {
    console.log(`${alunos.nome} tem a média ${alunos.nota}`)
})

console.log("Mostre o nome e a média dos alunos com a média abaixo de 7.0.")
const notabaixa = listaDeAlunos.filter(alunos => alunos.nota < 7)
    notabaixa.forEach(alunos =>
    console.log(`${alunos.nome} tem a média ${alunos.nota}`)
    )


console.log("Mostre o nome e a média dos alunos com média maior ou igual a 7.0.")
const notaalta = listaDeAlunos.filter(alunos => alunos.nota >= 7)
notaalta.forEach(alunos =>
    console.log(`${alunos.nome} tem a média ${alunos.nota} `))
    