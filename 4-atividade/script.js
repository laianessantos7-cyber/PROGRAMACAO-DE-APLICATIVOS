function verificar() {
    let txtI = document.getElementById('txtidade');
    let res = document.getElementById('resultado');
    let idade = Number(txtI.value);

    if (txtI.value.length == 0) {
        res.innerHTML = "Por favor, digite uma idade válida.";
        return;
    }

    if (idade < 16) {
        res.innerHTML = `Com ${idade} anos: <strong>Não pode votar.</strong>`;
    } else if (idade >= 16 && idade < 18) {
        res.innerHTML = `Com ${idade} anos: <strong>Voto opcional.</strong>`;
    } else if (idade >= 18 && idade <= 65) {
        res.innerHTML = `Com ${idade} anos: <strong>Voto OBRIGATÓRIO.</strong>`;
    } else {
        res.innerHTML = `Com ${idade} anos: <strong>Voto opcional (maiores de 65).</strong>`;
    }
}