var respostaCorreta = "certo";
var tentativasIncorretas = 0;

function validarResposta() {
  var opcoes = document.getElementsByName("pergunta01");
  var selecionada = false;

  for (var i = 0; i < opcoes.length; i++) {
    if (opcoes[i].checked) {
      selecionada = true;

      if (opcoes[i].value === respostaCorreta) {
        alert("Resposta correta!");
      } else {
        tentativasIncorretas++;

        if (tentativasIncorretas >= 2) {
          alert("Você errou duas vezes. Tente novamente mais tarde.");
          return;
        } else {
          alert("Resposta incorreta. Tente novamente.");
        }
      }

      break;
    }
  }

  if (!selecionada) {
    alert("Selecione uma alternativa antes de verificar a resposta.");
  }
}