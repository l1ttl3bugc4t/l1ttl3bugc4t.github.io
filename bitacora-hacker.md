---
layout: default
title: "Bitácora Hacker"
permalink: /bitacora-hacker/
---

# ✍️ Bitácora Hacker

Este es mi rincón para documentar lo que aprendo, lo que rompo (con ética), lo que descubro y lo que me frustra mientras avanzo en el mundo de la ciberseguridad.

Aquí encontrarás entradas personales, reflexiones técnicas, logs de pruebas, avances de proyectos y pensamientos que cruzan por la mente de **l1ttl3bugc4t** en modo terminal.

---
## 🧭 Navegación por Logs</h2>

<ul>
  {% assign logs = site.categories.bitácora | sort: 'date' | reverse %}
  {% for post in logs %}
    <li style="margin-bottom: 0.8rem;">
      <a href="{{ post.url | relative_url }}" style="font-weight: bold; text-decoration: none; color: #8be9fd;">
        {{ post.title }}
      </a><br>
      <small style="color: #ccc;">{{ post.date | date: "%d %b %Y" }}</small>
    </li>
  {% endfor %}
</ul>
