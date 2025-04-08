---
layout: default
title: Bienvenid@
---

<p>🐾 Bienvenid@ al rincón morado de <strong>l1ttl3bugc4t</strong>. Aquí encontrarás entradas de blog, proyectos, certificaciones y más.</p>

<h2>Posts recientes</h2>
<ul>
  {% for post in site.posts %}
    <li><a href="{{ post.url }}">{{ post.title }}</a> - {{ post.date | date: "%b %d, %Y" }}</li>
  {% endfor %}
</ul>