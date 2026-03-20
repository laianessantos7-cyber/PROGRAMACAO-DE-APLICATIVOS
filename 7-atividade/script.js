function calcular() {
    const n1 = parseFloat(document.getElementById('nota1').value);
    const n2 = parseFloat(document.getElementById('nota2').value);
    const n3 = parseFloat(document.getElementById('nota3').value);
    const resDiv = document.getElementById('resultado');

    const notas = [n1, n2, n3];

    // Validação
    if (notas.some(n => isNaN(n) || n < 0 || n > 10)) {
        resDiv.style.color = "red";
        resDiv.innerHTML = "⚠️ Insira apenas notas entre 0 e 10!";
        return;
    }

    // Média
    const media = (n1 + n2 + n3) / 3;

    let status = "";
    let cor = "";

    if (media >= 7) {
        status = "Aprovado ✅";
        cor = "green";
    } else if (media >= 5) {
        status = "Recuperação ⚠️";
        cor = "orange";
    } else {
        status = "Reprovado ❌";
        cor = "red";
    }

    resDiv.style.color = cor;
    resDiv.innerHTML = `Média: ${media.toFixed(1)} <br> ${status}`;
}