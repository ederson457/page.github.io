document.getElementById("chat-icon").onclick = function () {
  const chatWindow = document.getElementById("chat-window");
  chatWindow.style.display =
    chatWindow.style.display === "none" ? "block" : "none";
};

document.getElementById("send-btn").onclick = function () {
  const input = document.getElementById("user-input");
  const userInput = input.value.trim();
  if (userInput) {
    addMessage("Usuario: " + userInput);
    input.value = "";

    // Procesa la entrada del usuario y genera una respuesta
    const botResponse = getBotResponse(userInput);
    addMessage("Bot: " + botResponse);
  }
};

function addMessage(message) {
  const messagesDiv = document.getElementById("messages");
  messagesDiv.innerHTML += `<div>${message}</div>`;
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function getBotResponse(input) {
  const lowerInput = input.toLowerCase();

  // Respuestas predefinidas
  if (lowerInput.includes("reciclaje")) {
    return "Reciclar consiste en convertir materiales usados en nuevos productos. ¿Sabías que el plástico puede tardar hasta 1000 años en degradarse?";
  } else if (
    lowerInput.includes("corregimientos") ||
    lowerInput.includes("pasto")
  ) {
    return "Algunos corregimientos de Pasto son Catambuco, Gualmatán, y Genoy. ¿Quieres saber más sobre alguno en particular?";
  } else if (lowerInput.includes("medio ambiente")) {
    return "El medio ambiente es todo lo que nos rodea. Es importante cuidarlo para las futuras generaciones.";
  } else {
    return "Lo siento, no tengo una respuesta para eso. ¿Puedes preguntar algo más específico?";
  }
}
