function gerarTabuada() {
    const numInput = document.getElementById('numero').value;
    const operacaoEscolha = document.getElementById('operacao').value;
    const res = document.getElementById('resultadoTabuada');
    
    if (numInput === "") {
        res.innerHTML = "POR FAVOR, DIGITE UM NÚMERO!";
        return;
    }

    const n = parseFloat(numInput);
    let htmlFinal = "";

    // Objeto com as definições de cada operação
    const dadosOperacoes = {
        soma: { nome: "SOMA (+)", simbolo: "+", calcular: (a, b) => a + b },
        subtracao: { nome: "SUBTRAÇÃO (-)", simbolo: "-", calcular: (a, b) => a - b },
        multiplicacao: { nome: "MULTIPLICAÇÃO (x)", simbolo: "x", calcular: (a, b) => a * b },
        divisao: { nome: "DIVISÃO (÷)", simbolo: "÷", calcular: (a, b) => (a / b).toFixed(2) }
    };

    // Função interna para criar o bloco de texto
    function criarBloco(chave) {
        const op = dadosOperacoes[chave];
        let bloco = `<div class="bloco-operacao"><h3>${op.nome}</h3>`;
        for (let i = 1; i <= 10; i++) {
            bloco += `${n} ${op.simbolo} ${i} = <strong>${op.calcular(n, i)}</strong><br>`;
        }
        bloco += `</div>`;
        return bloco;
    }

    // Lógica de exibição
    if (operacaoEscolha === "todas") {
        for (let chave in dadosOperacoes) {
            htmlFinal += criarBloco(chave);
        }
    } else {
        htmlFinal = criarBloco(operacaoEscolha);
    }

    res.innerHTML = htmlFinal;
}