---
layout: post
title: "FFUF: Fuerza Bruta Felina para descubrir directorios y secretos web"
author: "l1ttl3bugc4t"
date: "2025-05-29"
tags: [FFUF, Fuerza Bruta, Web Recon, Red Team, Pentesting]
categories: [cuaderno, Red Team & Chill, CyberChallenges]
---

En el mundo de la seguridad ofensiva web, si no estás usando **ffuf**, probablemente te estás perdiendo de muchos tesoros escondidos. 🧵🐾

---

## 🌠 ¿Qué es ffuf?

**ffuf** (Fuzz Faster U Fool) es una herramienta ultra veloz escrita en Go, usada para **descubrir archivos, directorios, subdominios y más** mediante fuzzing HTTP.

Es una de las favoritas en CTFs y pentests por su velocidad, flexibilidad y versatilidad.

---

## 🛰️ Instalación rápida

```bash
sudo apt install ffuf        # en distros como Kali
# o bien:
go install github.com/ffuf/ffuf/v2@latest
```

---

## 🐾 Ejemplo básico

```bash
ffuf -u http://target.com/FUZZ -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt
```

---

## ⚡ Trucazos galácticos de uso

### 1. 🌒 Buscar archivos ocultos con `~`, `.bak`, `.old`

```bash
ffuf -u http://target.com/FUZZ -w wordlist.txt -e .php,.bak,.old,~,.txt
```

> Esto fuerza la extensión para probar variantes como `index.php~`, `login.old`, etc.

---

### 2. 🧪 Fuzzing de parámetros

```bash
ffuf -u http://target.com/page.php?FUZZ=test -w params.txt
```

> Perfecto para encontrar parámetros GET ocultos y vulnerables.

---

### 3. 🧬 Fuzzing de valores

```bash
ffuf -u http://target.com/search?query=FUZZ -w values.txt -X GET
```

> ¡También puedes usarlo para buscar inyecciones o bypasses!

---

### 4. 🔍 Fuzzing de subdominios

```bash
ffuf -u http://FUZZ.target.com -w subdomains.txt -H "Host: FUZZ.target.com"
```

> Ideal con listas como `dns-Jhaddix.txt` o `subdomains-top1million-5000.txt`.

---

### 5. 📂 Buscar rutas sensibles

```bash
ffuf -u http://target.com/FUZZ -w secrets.txt -fc 404
```

> Usa `-fc` para ignorar códigos de error, como `404`.

---

## 🚀 Tips extra que te harán volar

- Usa `-t 100` para más velocidad si la máquina lo permite
- Combina con `-mc` (match code) y `-fc` (filter code)
- Puedes combinar varios wordlists con `cat` y pipes:  
  ```bash
  cat list1.txt list2.txt | ffuf -u http://target.com/FUZZ -w -
  ```

---

## 🛡️ Precauciones

- Algunos firewalls bloquean automáticamente múltiples solicitudes anómalas
- Puedes probar con cabeceras personalizadas:
  ```bash
  -H "X-Forwarded-For: 127.0.0.1"
  ```

- También puedes usar el parámetro `-r` para seguir redirecciones

---

## 🚩 Conclusión Galáctica

**ffuf** no solo es rápida, también es una navaja suiza del reconocimiento web.  
Si sabes usarla bien, no hay .git, .env o backup que se te escape 😼💣

> ✨ _"Fuzzeando como loca hasta encontrar la joya oculta."_ — **l1ttl3bugc4t**

---
