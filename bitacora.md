---
layout: default
title: "Bitácora Hacker"
permalink: /bitacora-hacker/
---

<div style="max-width: 900px; margin: 2rem auto; padding: 2rem; background: #1e002f; border-radius: 15px; box-shadow: 0 0 20px rgba(140, 0, 255, 0.3); color: #fff; font-family: 'Fira Code', monospace;">

  <h1 style="text-align: center; font-size: 2.5rem; color: #c084fc;">✍️ Bitácora Hacker</h1>
  <p style="text-align: center; font-size: 1.1rem; color: #ccc; margin-bottom: 2rem;">
    Pequeños logs de aprendizaje, proyectos rotos (con amor), experimentos técnicos y reflexiones de una hacker con garras.  
    Bienvenido al terminal mental de <strong style="color: #8be9fd;">l1ttl3bugc4t</strong>.
  </p>

  <hr style="border: none; border-top: 1px solid #444; margin-bottom: 2rem;">

  <h2 style="font-size: 1.8rem; color: #c3ff99;">🧭 Navegación por Logs</h2>

  <ul style="list-style: none; padding-left: 0;">
    {% assign logs = site.categories.bitacora | sort: 'date' | reverse %}
    {% for post in logs %}
      <li style="margin-bottom: 1.5rem; padding: 1rem; background: #2e003e; border-radius: 12px; box-shadow: 0 0 10px rgba(255,255,255,0.05);">
        <a href="{{ post.url | relative_url }}" style="font-size: 1.2rem; color: #8be9fd; font-weight: bold; text-decoration: none;">
          {{ post.title }}
        </a><br>
        <small style="color: #aaa;">{{ post.date | date: "%d %b %Y" }}</small><br>
        <p style="color: #ddd; font-size: 0.95rem; margin-top: 0.5rem;">
          {{ post.excerpt | strip_html | truncatewords: 30 }}
        </p>
        <a href="{{ post.url | relative_url }}" style="color: #c3ff99; font-weight: bold;">→ Leer más</a>
      </li>
    {% endfor %}
  </ul>

</div>
