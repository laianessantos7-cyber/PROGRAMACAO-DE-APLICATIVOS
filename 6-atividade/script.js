function verificarAposentadoria() {
    const matricula = document.getElementById('matricula').value;
    const anoNascimento = parseInt(document.getElementById('anoNascimento').value);
    const tempoTrabalho = parseInt(document.getElementById('tempoTrabalho').value);
    const resultado = document.getElementById('resultado');

    const anoAtual = new Date().getFullYear();

    if (!matricula || isNaN(anoNascimento) || isNaN(tempoTrabalho)) {
        alert("⚠️ Preencha todos os campos!");
        return;
    }

    const idade = anoAtual - anoNascimento;

    const qualificado =
        (idade >= 65) ||
        (tempoTrabalho >= 30);

    resultado.classList.remove('hidden', 'aprovado', 'reprovado');

    if (qualificado) {
        resultado.classList.add('aprovado');
        resultado.innerHTML = `
            👨‍💼 <strong>Matrícula:</strong> ${matricula}<br>
            🎂 <strong>Idade:</strong> ${idade} anos<br>
            ⏳ <strong>Tempo:</strong> ${tempoTrabalho} anos<br>
            <hr>
            ✅ <strong>Requerer aposentadoria</strong>
        `;
    } else {
        resultado.classList.add('reprovado');
        resultado.innerHTML = `
            👨‍💼 <strong>Matrícula:</strong> ${matricula}<br>
            🎂 <strong>Idade:</strong> ${idade} anos<br>
            ⏳ <strong>Tempo:</strong> ${tempoTrabalho} anos<br>
            <hr>
            ❌ <strong>Não requerer aposentadoria</strong>
        `;
    }
}