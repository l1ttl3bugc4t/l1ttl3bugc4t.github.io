---
layout: default
title: Blog
permalink: /blog/
---

## 📝 Entradas del Blog

<div class="post-list">
  {% for post in site.posts %}
    <div class="post-preview">
      <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
      <p class="meta">Publicado el {{ post.date | date: "%d/%m/%Y" }}</p>
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