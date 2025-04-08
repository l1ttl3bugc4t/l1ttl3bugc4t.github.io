---
layout: default
title: Consola
permalink: /consola/
---

<h2>🖥️ Consola Interactiva</h2>
<p>Escribe comandos estilo UNIX para descubrir secretos y gatitos ocultos 🐾</p>

<div id="terminal">
  <div id="terminal-output"></div>
  <div class="input-line">
    <span>$</span><input id="terminal-input" type="text" autofocus autocomplete="off" />
  </div>
</div>

<script src="/assets/js/console.js"></script>

<style>
#terminal {
  background-color: #000;
  color: #0f0;
  font-family: monospace;
  padding: 1rem;
  border-radius: 10px;
  max-width: 800px;
  margin: 2rem auto;
  height: 400px;
  overflow-y: auto;
  box-shadow: 0 0 10px rgba(166, 74, 201, 0.5);
}
.input-line {{
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
}}
#terminal-input {{
  background: transparent;
  border: none;
  color: #0f0;
  outline: none;
  width: 100%;
  font-family: inherit;
  font-size: 1rem;
}}
.command, .response {{
  margin-top: 0.5rem;
  white-space: pre-wrap;
}}
</style>