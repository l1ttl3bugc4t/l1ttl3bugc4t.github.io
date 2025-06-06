---
layout: post
title: "Wfuzz: Fuzzing en estéreo desde la terminal"
author: "l1ttl3bugc4t"
date: "2025-06-06"
tags: [Wfuzz, Fuzzing, Pentesting, Web, Fuerza Bruta, Red Team]
categories: [Cuaderno, Red Team & Chill, CyberChallenges]
---

**Wfuzz** es como una metralleta de fuzzing que dispara palabras contra parámetros web hasta que una abre la puerta 🚪💥  
Ligero, potente y súper personalizable.

---

## 🧠 ¿Qué es Wfuzz?

**Wfuzz** es una herramienta de línea de comandos que permite realizar ataques de **fuerza bruta web** y **fuzzing de parámetros**.  
Es especialmente útil para encontrar:
- Rutas ocultas
- Parámetros vulnerables
- Archivos accesibles
- Usuarios válidos
- Inyecciones en variables

---

## 🛠️ Instalación

```bash
sudo apt install wfuzz
```

O con pip:

```bash
pip install wfuzz
```

---

## 🚀 Uso básico

```bash
wfuzz -c -z file,/usr/share/wordlists/dirb/common.txt --hc 404 http://target/FUZZ
```

### 🧾 Explicación:

- `-c` → salida en colores
- `-z file,...` → usar archivo como wordlist
- `FUZZ` → marcador que será reemplazado por cada entrada de la wordlist
- `--hc 404` → oculta respuestas con código 404 (Not Found)

---

## 🎯 Casos de uso

### 📁 Descubrimiento de directorios

```bash
wfuzz -z file,common.txt --hc 404 http://victima.com/FUZZ
```

### 🧪 Fuzzing de parámetros GET

```bash
wfuzz -z file,paramlist.txt --hh 0 "http://victima.com/index.php?FUZZ=test"
```

### 🔐 Fuerza bruta de login (POST)

```bash
wfuzz -z file,users.txt -z file,pass.txt -d "user=FUZZ&pass=FUZ2Z" -H "Content-Type: application/x-www-form-urlencoded" --hc 401 http://victima.com/login
```

### 🎭 Fuzzing en headers

```bash
wfuzz -z file,headers.txt -H "FUZZ: test" http://victima.com/
```

---

## 💡 Tips poderosos

- Usa `--hh` para filtrar por tamaño de respuesta (útil cuando 200 no es éxito)
- Puedes combinar múltiples `-z` (input sources) para bruteforceo avanzado
- Acepta parámetros codificados, headers personalizados y más
- Soporta JSON y rutas RESTful

---

## 🧠 Pro tip felino

Para detectar archivos con tilde (`~`) o respaldo (`.bak`, `.old`):

```bash
wfuzz -z file,common.txt -z list,'.bak,.old,~' -u "http://victima.com/FUZZFUZ2Z" --hc 404
```

Esto prueba cada palabra combinada con cada sufijo 😉

---

## 🛡️ Precauciones

- Si usas fuzzing agresivo, **el servidor puede banearte**
- Usa `--delay` o `--rate` para evitar bloqueos por WAF o IPS
- Siempre valida los resultados con herramientas como `curl` o `burp`

---

## 🌌 Conclusión

**Wfuzz** es una de las herramientas más versátiles y ninja del fuzzing web.  
No tan mainstream como otras, pero en manos de un@ hacker galáctic@ como tú… es devastadora 🪐⚔️

> _"El que no fuzzzea, no descubre."_ — **l1ttl3bugc4t**

---
