---
layout: post
title: "John the Ripper: El descifrador de contraseñas legendario"
author: "l1ttl3bugc4t"
date: "2025-05-19"
tags: [Hacking, Cracking, John, Contraseñas, Red Team]
categories: [cuaderno, Red Team & Chill, CyberChallenges]
---

Cuando encuentras un archivo de contraseñas cifradas y te preguntas “¿cómo lo descifro?”...  
Tu mejor aliado es **John the Ripper** 🕵️‍♂️🔓

---

## 🌠 ¿Qué es John the Ripper?

**John the Ripper** (o simplemente "John") es una herramienta especializada en **cracking de contraseñas**. Puede romper hashes mediante ataques de diccionario, fuerza bruta o combinaciones inteligentes. Es muy usado en CTFs, pentesting y análisis forense.

> 🧠 Su magia radica en su velocidad, eficiencia y compatibilidad con múltiples formatos.

---

## 🛰️ ¿Para qué sirve John?

- 🔓 Descifrar contraseñas cifradas (hashes)
- 📜 Auditar contraseñas en sistemas locales
- 🧪 Probar diccionarios y combinaciones de fuerza bruta
- ⚙️ Compatible con muchos formatos (MD5, SHA1, bcrypt, NTLM, etc.)

---

## 🐾 ¿Cómo usar John?

### 1. Preparar el hash (opcional):
Algunos hashes deben estar en un archivo en formato "username:hash" o solo el hash. Si vienen de Linux:

```bash
unshadow /etc/passwd /etc/shadow > hash.txt
```

### 2. Ejecutar John:

```bash
john hash.txt
```

Esto iniciará un ataque con el diccionario por defecto (`/usr/share/john/password.lst`).

---

## 🔧 Flags útiles de John

| Comando                        | Descripción                                           |
|-------------------------------|--------------------------------------------------------|
| `--wordlist=<archivo>`        | Usa un diccionario personalizado                      |
| `--rules`                     | Aplica reglas para mutar palabras del diccionario     |
| `--format=<formato>`          | Especifica el tipo de hash (ej. raw-md5, nt, bcrypt) |
| `--show`                      | Muestra contraseñas crackeadas                        |
| `--incremental`               | Fuerza bruta total (modo lento pero poderoso)         |
| `--fork=N`                    | Usa múltiples núcleos para acelerar el cracking       |
| `--session=<nombre>`          | Guarda la sesión para retomarla después               |

---

## 🔍 Ejemplo básico

```bash
john --wordlist=rockyou.txt hashes.txt
```

Para ver los resultados después:

```bash
john --show hashes.txt
```

---

## 🧪 Detectar tipo de hash

Si no sabes qué tipo de hash tienes, puedes usar:

```bash
hashid <hash>
```

o

```bash
hashcat -m 0 -a 0 <hash> <diccionario>
```

---

## 💥 Modo fuerza bruta total

Cuando no tienes un diccionario o ninguna pista, prueba:

```bash
john --incremental --format=raw-md5 hashes.txt
```

---

## 🛡️ Consideraciones éticas

- No utilices John para crackear contraseñas sin permiso.
- Es ideal para auditorías de seguridad y recuperación de contraseñas olvidadas.
- Úsalo en entornos de laboratorio, CTFs o pentests autorizados.

---

## 🐱‍💻 Buenas prácticas hacker

- Antes de usar fuerza bruta, prueba con diccionarios simples.
- Usa `--fork` en máquinas con múltiples cores para ganar velocidad.
- Guarda tu sesión con `--session` y recupérala si se interrumpe.
- Siempre revisa el tipo de hash, John necesita saberlo.

---

## 🚩 Conclusión Galáctica

**John the Ripper** es el clásico descifrador de contraseñas que no puede faltar en tu mochila de herramientas hacker. Rápido, versátil y brutalmente efectivo, es perfecto para cuando te enfrentas a hashes duros de roer. 😼🧠

> 🐾✨ _"Si hay una contraseña que romper... John la va a romper."_ — **l1ttl3bugc4t**

---
