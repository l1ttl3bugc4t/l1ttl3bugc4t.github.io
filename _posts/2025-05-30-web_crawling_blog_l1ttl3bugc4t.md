---
layout: post
title: "Web Crawling: Rastreo felino para devorar estructuras web"
author: "l1ttl3bugc4t"
date: "2025-05-30"
tags: [Web Crawling, Pentesting, Recolección de Información, Red Team, OSINT]
categories: [cuaderno, Red Team & Chill, CyberChallenges]
---

**Web Crawling** es el arte (y ciencia) de recorrer un sitio web de forma automatizada para **descubrir páginas, rutas, archivos y comportamientos escondidos**.  
En el mundo del pentesting... es tu linterna láser para cazar bugs en la oscuridad. 😼🔦

---

## 🌐 ¿Qué es un Web Crawler?

Un **web crawler** es un bot que visita páginas web, sigue enlaces, y construye un mapa del sitio.

Lo usan motores de búsqueda como Google, pero también lo usamos nosotros para:
- Reconocer rutas interesantes
- Detectar formularios, parámetros y lógica de negocio
- Enumerar recursos como `.js`, `.json`, `.php`, `.env`, `.bak`, etc.

---

## 🛠️ Herramientas comunes para Web Crawling en Pentesting

### 🐍 `gobuster`
```bash
gobuster dir -u http://target.com -w wordlist.txt
```

### 🕷️ `feroxbuster`
```bash
feroxbuster -u http://target.com -w wordlist.txt -x php,html,txt
```

### 💣 `dirsearch`
```bash
python3 dirsearch.py -u http://target.com -e php,html,txt
```

### 🐾 `burp suite` (modo automático)
- Usa la opción de **Spider/Crawler** para descubrir rutas desde la navegación o proxy.

---

## 🚀 Consejos galácticos para un crawling eficiente

### 🔎 Usa buenas wordlists
- SecLists: `/usr/share/seclists/Discovery/Web-Content/`
- Crea tu propia wordlist basada en `robots.txt`, `sitemap.xml`, JavaScript y errores 404

### 💬 Analiza JS
- Usa herramientas como `LinkFinder`, `JSParser` o el panel de red de DevTools para encontrar rutas embebidas

### 🧠 Aprovecha patrones comunes
- `/admin/`, `/dashboard/`, `/panel/`, `/backup/`, `/dev/`, `/v1/api/`, etc.

### 🎭 Usa agentes y headers personalizados
```bash
-H "User-Agent: Googlebot"
-H "X-Forwarded-For: 127.0.0.1"
```

### 🛑 Evita el bloqueo
- Ajusta la velocidad con `-t` (threads)
- Respeta (o ignora estratégicamente) `robots.txt`

---

## 🛡️ Consideraciones éticas

- No lo uses sin autorización en sitios en producción
- No lances crawlers agresivos en sitios frágiles
- Siempre documenta lo encontrado (URLs, parámetros, respuestas)

---

## 🧩 Bonus Hack

Combina herramientas para mayor efectividad:

```bash
cat output.txt | grep ".php" | ffuf -u https://target.com/FUZZ -w -
```

> ¡Así descubres endpoints Y los pruebas en un solo paso! 😼⚙️

---

## 🚩 Conclusión Cósmica

El crawling es como olfatear una ciudad digital:  
**entre más calles explores, más secretos puedes encontrar.**  
Pero recuerda: las mejores rutas, a veces no están indexadas 🕸️

> ✨ _"Mientras otros solo navegan... tú mapeas el alma del sitio."_ — **l1ttl3bugc4t**

---
