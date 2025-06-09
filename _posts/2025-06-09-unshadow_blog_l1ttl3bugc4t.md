---
layout: post
title: "unshadow: El puente entre /etc/passwd y /etc/shadow"
author: "l1ttl3bugc4t"
date: "2025-06-09"
tags: [unshadow, Cracking, Linux, Pentesting, Red Team, Seguridad]
categories: [cuaderno, Red Team & Chill, CyberChallenges]
---

**unshadow** es una pequeña gran herramienta que permite combinar la información de `/etc/passwd` y `/etc/shadow` en un solo archivo entendible por herramientas de cracking como **John The Ripper** 🦷💥

---

## 🧠 ¿Qué hace exactamente?

Los sistemas Linux separan los datos de usuario y de contraseñas cifradas en dos archivos distintos: `/etc/passwd` y `/etc/shadow`.  
`unshadow` se encarga de **fusionarlos** en una sola línea por usuario, formando un archivo con formato especial que **john** puede procesar para hacer fuerza bruta o ataques de diccionario.

---

## 🛠️ Uso básico

```bash
unshadow /etc/passwd /etc/shadow > hashes.txt
```

Esto generará un archivo llamado `hashes.txt` con las entradas combinadas de usuarios y sus hashes.

---

## 📄 Ejemplo de salida

```text
usuario:$6$salt$hash:1000:1000:Comentario:/home/usuario:/bin/bash
```

- `usuario`: nombre del usuario
- `$6$salt$hash`: hash SHA-512 (por el prefijo `$6$`)
- `1000:1000`: UID y GID
- Resto: info del usuario

---

## 💣 ¡Y a crackear!

Una vez que tienes el archivo, úsalo con `john`:

```bash
john hashes.txt --wordlist=/usr/share/wordlists/rockyou.txt
```

Puedes ver los resultados con:

```bash
john --show hashes.txt
```

---

## 🔒 ¿Y si no soy root?

¡Aquí viene lo bueno! Solo el usuario **root** o alguien que haya conseguido **escalación de privilegios** podrá acceder a `/etc/shadow`.  
Pero si logras eso… ¡tienes vía libre para el cracking! 😼🕳️

---

## 🛡️ Recomendaciones de defensa

- Asegurar que `/etc/shadow` tenga permisos `640` o más restrictivos
- Usar hashing fuerte (`SHA-512`, `yescrypt`)
- Monitorear cambios sospechosos en estos archivos
- Aplicar bloqueo tras intentos fallidos de login

---

## ✨ Conclusión

**unshadow** es como un traductor entre el mundo de Linux y las herramientas de cracking.  
Te permite convertir dos archivos vitales del sistema en un objetivo listo para romper.

> _"Donde hay hashes… hay una oportunidad."_ — **l1ttl3bugc4t**

---
