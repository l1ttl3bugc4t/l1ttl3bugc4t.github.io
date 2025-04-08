document.addEventListener("DOMContentLoaded", function() {
  const terminal = document.getElementById("terminal");
  const input = document.getElementById("terminal-input");
  const output = document.getElementById("terminal-output");

  function printResponse(text) {
    const div = document.createElement("div");
    div.className = "response";
    div.textContent = text;
    output.appendChild(div);
    terminal.scrollTop = terminal.scrollHeight;
  }

  input.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
      const command = input.value.trim();
      const line = document.createElement("div");
      line.className = "command";
      line.textContent = `$ ` + command;
      output.appendChild(line);

      let response = {
        "whoami": "l1ttl3bugc4t",
        "meow": "🐱 acceso autorizado, humano",
        "ls": "certs/  galeria/  hack.txt  catnip.sh",
        "sudo hug l1ttl3bugc4t": "💜 hug granted",
        "purpl3bl0g": "https://l1ttl3bugc4t.github.io",
        "clear": "[pantalla limpia]",
        "banner": "🐾 Bienvenido a la consola secreta de l1ttl3bugc4t",
        "fortune": "Los gatos saben todos tus secretos... y los protegen.",
        "cat secret.txt": "🐈‍⬛: No hay mejor shell que un lugar cálido para dormir.",
        "help": "Comandos disponibles: whoami, meow, ls, hug, clear, banner, fortune, cat, help",
        "exit": "Saliendo... 🐾"
      }[command] || "Comando no reconocido 😿";

      printResponse(response);
      input.value = "";
    }
  });
});