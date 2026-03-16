function calcular() {
    const n1 = parseFloat(document.getElementById('n1').value);
    const n2 = parseFloat(document.getElementById('n2').value);
    const displayResultado = document.getElementById('resultado');

    if (isNaN(n1) || isNaN(n2)) {
        alert("Preencha os dois números para o Leão calcular!");
        return;
    }

    const soma = n1 + n2;
    const media = soma / 2;
    const produto = n1 * n2;
    const maior = Math.max(n1, n2);
    const menor = Math.min(n1, n2);

    displayResultado.classList.remove('hidden');
    displayResultado.innerHTML = `
        <div class="linha-resultado"><strong>Média:</strong> ${media}</div>
        <div class="linha-resultado"><strong>Soma:</strong> ${soma}</div>
        <div class="linha-resultado"><strong>Produto:</strong> ${produto}</div>
        <div class="linha-resultado"><strong>Maior:</strong> ${maior}</div>
        <div class="linha-resultado"><strong>Menor:</strong> ${menor}</div>
    `;
}