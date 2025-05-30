---
layout: post
title: "robots.txt: El mapa secreto que los admin olvidan esconder"
author: "l1ttl3bugc4t"
date: "2025-05-30"
tags: [robots.txt, Recolección de Información, OSINT, Pentesting, Web Recon]
categories: [cuaderno, Red Team & Chill, CyberChallenges]
---

El archivo **robots.txt** es como ese letrero que dice “No mires aquí” justo donde deberías mirar.  
Y sí, los pentesters lo sabemos bien 😼📜

---

## 🧠 ¿Qué es robots.txt?

Es un archivo de texto ubicado en la raíz de un sitio web, que sirve para **dar instrucciones a los bots de indexación** (como los de Google).

Ejemplo de ruta:
```
https://target.com/robots.txt
```

---

## 📦 ¿Qué contiene?

Instrucciones como:

```txt
User-agent: *
Disallow: /admin
Disallow: /backup/
Allow: /public
```

Esto significa:
- Los bots **NO deben entrar** a `/admin` ni a `/backup`
- Pero **sí pueden indexar** `/public`

---

## 🐾 ¿Por qué es importante en un pentest?

Porque muchos administradores **olvidan que los humanos también podemos leerlo**.  
Y a veces dejan ahí pistas como:

- `/test/`
- `/dev/`
- `/staging/`
- `/old/`
- `/wp-admin/`
- `/cgi-bin/`
- `/backup.zip`

🔍 ¡O incluso rutas que revelan paneles de administración o archivos sensibles!

---

## 🛠️ Cómo analizarlo en un pentest

### 1. Accede directo al archivo

```bash
curl https://target.com/robots.txt
```

### 2. Busca rutas sospechosas o jugosas

- ¿Hay directorios de admin?
- ¿Archivos `.zip`, `.bak`, `.sql`, `.log`?
- ¿Subdominios o endpoints antiguos?

### 3. Úsalo como wordlist para ffuf o dirb

```bash
ffuf -u https://target.com/FUZZ -w robots_paths.txt
```

---

## 🛡️ Precauciones

- El archivo **no es un mecanismo de seguridad**, solo una sugerencia para bots.
- Los atacantes lo usan para buscar rutas restringidas.
- Algunos WAFs monitorean su lectura con frecuencia sospechosa.

---

## 🚀 Pro tip galáctico

Si encuentras algo como:

```txt
Disallow: /sistema-secreto/
```

📎 Ve directamente a:
```
https://target.com/sistema-secreto/
```

¡Y explora si está abierto al público! 🕵️‍♀️

---

## 🚩 Conclusión Espacial

`robots.txt` es como un diario a medio esconder:  
**no fue hecho para ti... pero igual lo puedes leer.**  
Y muchas veces, revela más de lo que debería. 😼💣

> ✨ _"Todo buen pentester mira donde nadie quiere que mires."_ — **l1ttl3bugc4t**

---
