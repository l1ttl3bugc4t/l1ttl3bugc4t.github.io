---
layout: default
title: purpl3bl0g
permalink: /
---
<div class="welcome-wrapper">
<pre style="text-align: center; color: #a64ac9; font-weight: bold;">
        ／ﾌﾌ 　　　　　 　　 　ム｀ヽ
  / ノ)　　 ∧　∧　　　　）　ヽ
 / ｜　　(´・ω・`)ノ⌒（ゝ._,ノ
/　ﾉ⌒7⌒ヽーく　 ＼　　／
丶＿ ノ　　 ノ､　　|　/
　　 `ヽ `ー-'_人`ー'ノ
　　　 丶 ￣ _人'彡ﾉ
　　　　　＞　｀⌒´
</pre>
</div>

<p style="text-align: center;">
  🐾 ~ purpl3bl0g loaded... executing curiosity.exe ~ 💻<br>
  Soy <strong>l1ttl3bugc4t</strong> — hacker altamente felina, amante del color morado y red teamer.<br>
  ¡Bienvenid@ a purpl3bl0g! Un lugar donde los scripts maúllan, los gatos hackean y el color morado lo invade todo. 🐱💻<br>
  Aquí encontrarás:<br>
     ✨ Aventuras de hacking ético con flow y estilo<br>
     ☁️ Reflexiones tech entre nubes, terminales y ronroneos<br>
     🔐 Certificaciones que demuestran que l1ttl3bugc4t no solo rasguña... ¡también defiende!<br>
     📸 Galerías con eventos, proyectos, gatitos y más magia visual<br>
     🧪 Un laboratorio donde los experimentos sí salen... ¡o al menos brillan en neón!<br>
     Si amas la ciberseguridad, los gatos y el morado tanto como el código bien indentado, estás en casa.<br>
     Aquí no solo se comparte conocimiento... ¡se comparte con zarpazos de ternura y líneas de comando!<br>
</p>

<div class="home-grid">
  <div class="home-card">
    <h3>📖 Blog</h3>
    <p>Reflexiones y aventuras del mundo ciber.</p>
    <a href="/blog">Ir al blog</a>
  </div>
  <div class="home-card">
    <h3>📸 Galería</h3>
    <p>Fotos de eventos, proyectos y momentos especiales.</p>
    <a href="/galeria">Ver galería</a>
  </div>
  <div class="home-card">
    <h3>🏅 Certificaciones</h3>
    <p>Logros, aprendizajes y reconocimientos.</p>
    <a href="/certs">Ver certificaciones</a>
  </div>
  <div class="home-card">
    <h3>🧪 Laboratorio</h3>
    <p>Scripts, herramientas y experimentos personales.</p>
    <a href="/lab">Explorar proyectos</a>
  </div>
  <div class="home-card">
    <h3>🖥️ Consola</h3>
    <p>Un easter egg interactivo para lxs curiosxs.</p>
    <a href="/consola">Abrir consola</a>
  </div>
</div>

<div style="text-align: center; margin-top: 2rem;">
  <a href="/contact" class="contact-btn">📬 Contáctame</a> <br>
</div>

<style>
.typing-title {
  width: 28ch;
  animation: typing 3s steps(28), blink 0.5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 2px solid #a64ac9;
  color: #a64ac9;
  text-align: center;
  font-size: 2rem;
  margin-top: 1rem;
}

@keyframes typing {
  from { width: 0 }
  to { width: 28ch }
}

@keyframes blink {
  50% { border-color: transparent; }
}

.home-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.home-card {
  background: #1c1c2b;
  padding: 1rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 0 10px rgba(166, 74, 201, 0.3);
}

.home-card a {
  color: #f72585;
  text-decoration: none;
  font-weight: bold;
}

.home-card a:hover {
  text-decoration: underline;
}

.contact-btn {
  background: #a64ac9;
  color: white;
  padding: 0.7rem 1.2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  box-shadow: 0 0 10px rgba(166, 74, 201, 0.4);
}

.contact-btn:hover {
  background: #5a189a;
}

/* Fade-in animación para tarjetas */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.home-card {
  animation: fadeIn 1s ease forwards;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.home-card:hover {
  transform: scale(1.03);
  box-shadow: 0 0 20px rgba(166, 74, 201, 0.6);
}

/* Glow pulsante en botón de contacto */
.contact-btn {
  animation: glow 2s ease-in-out infinite alternate;
}

@keyframes glow {
  0% { box-shadow: 0 0 10px #a64ac9; }
  100% { box-shadow: 0 0 20px #f72585; }
}

.welcome-wrapper {
  max-width: 100%;
  overflow-x: auto;
  word-break: break-word;
  padding: 0 1rem;
  box-sizing: border-box;
}
.welcome-wrapper pre {
  white-space: pre-wrap;
  font-size: 0.95rem;
}
</style>
