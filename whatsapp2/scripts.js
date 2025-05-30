function enviarMensagem() {
    document.getElementById("chat-container").innerHTML
        += `<div class="caixa-mensagem mensagem-minha"><p>${document.getElementById("text-to-send").value}<span>13:00</p></div>`;
  }