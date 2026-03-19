function calcularMedia() {
    // 1. Pegar os valores digitados e converter para número (float)
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);
    const divResultado = document.getElementById('resultado');

    // Validação: checar se o usuário preencheu todas as notas
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        divResultado.innerHTML = "Por favor, preencha todas as notas corretamente.";
        divResultado.className = "resultado reprovado"; // Usa a cor vermelha para erro
        return; // Para a execução da função aqui
    }

    // 2. Calcular a média
    const media = (nota1 + nota2 + nota3) / 3;
    let situacao = "";
    let classeCor = "";

    
    if (media >= 7) {
        situacao = "Aprovado";
        classeCor = "aprovado";
    } else {
        situacao = "Reprovado";
        classeCor = "reprovado";
    }

    // 4. Mostrar o resultado na tela (formatando a média para 2 casas decimais)
    divResultado.innerHTML = `
        Média: ${media.toFixed(2)} <br>
        Situação: <span class="${classeCor}">${situacao}</span>
    `;
}