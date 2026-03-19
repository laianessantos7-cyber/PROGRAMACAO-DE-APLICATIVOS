function calcular() {
    let input = document.getElementById('txtqtd');
    let res = document.getElementById('resultado');
    let quantidade = Number(input.value);
    let total = 0;

    if (quantidade < 12) {
        total = quantidade * 1.30;
    } else {
        total = quantidade * 1.00;
    }

    res.innerHTML = `Total: <strong>R$ ${total.toFixed(2).replace('.', ',')}</strong>`;
}