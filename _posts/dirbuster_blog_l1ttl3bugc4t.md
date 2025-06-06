
---
title: "DirBuster: Derribando puertas ocultas en la web"
author: "l1ttl3bugc4t"
date: "2025-05-12"
tags: [DirBuster, Fuzzing, Web Pentesting, Fuerza Bruta, Directorios, Red Team]
categories: [Cuaderno, Red Team & Chill, CyberChallenges]
---

Cuando una aplicación web dice "no hay nada aquí"...  
DirBuster dice: **"¿Seguro?"** 😼🕵️‍♀️

---

## 🧠 ¿Qué es DirBuster?

**DirBuster** es una herramienta gráfica de fuerza bruta para descubrir **directorios y archivos ocultos** en servidores web.  
Forma parte de la suite de OWASP y es muy útil en etapas de reconocimiento en pentesting web.

---

## 🔍 ¿Qué puedes encontrar?

- Paneles de admin olvidados
- Archivos `.bak`, `.zip`, `.old`
- Rutas internas de APIs
- Configuraciones expuestas como `.env`, `config.php`
- Archivos indexables no protegidos

---

## 🛠️ Cómo se usa

### 🎛️ Lanzar DirBuster

```bash
dirbuster
```

O si lo tienes en Kali, también puedes encontrarlo en:  
`Applications > Web Application Analysis > dirbuster`

---

### 🧪 Configuración básica

1. Ingresa la URL objetivo (`http://192.168.0.10/`)
2. Selecciona una **wordlist** (usa `/usr/share/wordlists/dirbuster/`)
3. Define profundidad, extensión de archivos si quieres (`php`, `html`, etc.)
4. ¡Click en "Start" y observa cómo explora la web!

---

## 🎯 Wordlists recomendadas

- `directory-list-2.3-medium.txt`  
- `common.txt`  
- `big.txt` (más lenta, pero profunda)

> También puedes usar wordlists personalizadas creadas con CeWL o crunch 🧠

---

## ⚡ Alternativas CLI para frikis de la terminal

- [`gobuster`](https://github.com/OJ/gobuster) – más rápido y moderno
- [`ffuf`](https://github.com/ffuf/ffuf) – ultrarrápido y versátil
- [`dirsearch`](https://github.com/maurosoria/dirsearch) – full python y automatizable

---

## ⚠️ Precauciones

- Puede generar **mucho tráfico** (¡no lo uses sin permiso!)
- Algunos WAFs pueden bloquearte si detectan fuzzing agresivo
- Usa extensiones reales del servidor (`.php`, `.asp`, `.jsp`, etc.)

---

## 🚀 Conclusión

**DirBuster** es una puerta de entrada al universo oculto de las aplicaciones web 🌌  
Si sabes dónde buscar… puedes encontrar el tesoro que el dev dejó olvidado 🗃️✨

> ✨ _"Las rutas ocultas son como bugs dormidos: solo despiertan si las visitas."_ — **l1ttl3bugc4t**

---
