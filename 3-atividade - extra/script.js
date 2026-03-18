// Efeito 3D com movimento do mouse
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("mousemove", (e) => {
    let x = e.offsetX;
    let y = e.offsetY;

    let rotateX = (y / 200) * 10;
    let rotateY = (x / 200) * -10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0)";
  });
});

// Quiz
function responder(resposta) {
  const resultado = document.getElementById("resultado");

  if (resposta === "certo") {
    resultado.innerHTML = "✅ Acertou!";
    resultado.style.color = "lime";
  } else {
    resultado.innerHTML = "❌ Errou!";
    resultado.style.color = "red";
  }
}