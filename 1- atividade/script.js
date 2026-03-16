function gerarTabuada () {
    const numeroInput = document.getElementById("numeroInput");
    let numero = parent(numeroInput.value);

    const resultado = document.getElementById ("resultadoTabuada");
    resultadoDiv.innerHTML = "";


//  Verificar se a entrada é um numero valido

    if (isNaN(numero) || numero === numero || numero === "") {
        resultadoDiv.innerHTML = "<p> Por favor, digite um numero valido. </p>"
        return; // Este comando sai da função.
        
            
        }
         // Adicionar titulo para a tabuada.
         resultadoDiv.innerHTML += `<h2> Tabuada do numero ${numero} </h2>`;

         // Laço de  repetição para gerar tabuada.
         for (let i = 1; i <=10; i++) {
            let resultado = numero * i;
            resultadoDiv.innerHTML+= `<p>${numero} x ${i} =${resultado} </p>`;

         }

    }

const botaoGerar =document.getElementById("btnGerar");
botaoGerar.addEventListener("click", gerarTabuada);