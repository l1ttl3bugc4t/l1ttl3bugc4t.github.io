---
layout: default
title: "Cuaderno"
permalink: /cuaderno/
---

# 📒 Cuaderno de l1ttl3bugc4t

Bienvenid@ a mi cuaderno técnico —un espacio donde documento mis apuntes, resúmenes y reflexiones mientras estudio ciberseguridad, redes, hacking ético y más.

Aquí todo es conocimiento en proceso: organizado, divertido y con mucho flow hacker 💻🌌

---

## 📚 Entradas recientes

<div class="post-list">
  {% assign notes = site.categories.cuaderno | sort: 'date' | reverse %}
  {% for post in notes %}
    <div class="post-preview">
      <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
      <p class="meta">📅 {{ post.date | date: "%d/%m/%Y" }}</p>
    </div>
  {% endfor %}
</div>

<style>
.post-list {
  display: grid;
  gap: 1.5rem;
  margin-top: 2rem;
}
.post-preview {
  background: #1c1c2b;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(166, 74, 201, 0.3);
}
.post-preview a {
  color: #a64ac9;
  text-decoration: none;
}
.post-preview a:hover {
  color: #f72585;
}
.meta {
  font-size: 0.9rem;
  color: #ccc;
}
</style>
