
---
title: "/etc/passwd vs /etc/shadow: Los archivos que guardan la identidad de tu sistema"
author: "l1ttl3bugc4t"
date: "2025-05-12"
tags: [Linux, passwd, shadow, Red Team, Seguridad, Cuentas, Cracking]
categories: [Cuaderno, Red Team & Chill, CyberChallenges]
---

En todo sistema Linux existen dos archivos clave que contienen información sobre los usuarios:  
🔑 **/etc/passwd** y 🔒 **/etc/shadow**

Ambos trabajan juntos para gestionar identidades, accesos y contraseñas… ¡y también son objetivos comunes en pentesting!

---

## 🧾 ¿Qué es `/etc/passwd`?

Archivo **públicamente legible** que contiene información sobre todos los usuarios del sistema.

### 📌 Estructura típica de una línea:

```
usuario:x:UID:GID:comentario:/home/usuario:/bin/bash
```

| Campo | Significado |
|-------|-------------|
| usuario | Nombre de usuario |
| x | Antiguamente contenía la contraseña encriptada (ahora un placeholder) |
| UID | User ID (identificador único) |
| GID | Group ID |
| comentario | Información adicional (puede estar vacía) |
| /home/... | Ruta al directorio personal |
| /bin/bash | Shell por defecto |

> ⚠️ Aunque es legible por todos los usuarios, ya **no contiene contraseñas reales** por razones de seguridad.

---

## 🔐 ¿Qué es `/etc/shadow`?

Archivo **sólo legible por root**, contiene **las contraseñas cifradas (hashes)** de cada usuario.

### 📌 Estructura típica de una línea:

```
usuario:$6$salt$hash:fecha:0:99999:7:::
```

| Campo | Significado |
|-------|-------------|
| usuario | Nombre del usuario |
| $6$salt$hash | Contraseña encriptada (el `$6$` indica SHA-512) |
| fecha | Días desde 1970 del último cambio de password |
| campos siguientes | Definen política de expiración, bloqueo, etc. |

> Solo `root` o procesos con privilegios pueden leer este archivo.

---

## 🔍 Diferencias clave

| Característica | /etc/passwd | /etc/shadow |
|----------------|-------------|-------------|
| Visibilidad | Público (legible por todos) | Privado (solo root) |
| Contenido | Info general de usuarios | Hashes de contraseñas |
| Seguridad | Bajo (sin contraseñas) | Alto (protegido) |
| Objetivo en pentests | Enumeración | Cracking de hashes si se accede |

---

## 🧨 ¿Por qué son importantes en pentesting?

- **/etc/passwd** puede revelar:
  - Usuarios activos
  - Usuarios con UID 0 (root)
  - Shells falsas o inactivas (`/sbin/nologin`)

- **/etc/shadow**:
  - Si se consigue acceso, ¡es oro puro!
  - Permite usar herramientas como `john` o `hashcat` para romper contraseñas

---

## 🛠️ Cracking básico con `john`

```bash
unshadow /etc/passwd /etc/shadow > hashes.txt
john hashes.txt --wordlist=rockyou.txt
```

---

## 🛡️ Protección recomendada

- Permisos seguros:
  - `/etc/passwd`: `644`
  - `/etc/shadow`: `640` o `000` (solo root)
- No dejar shells activas en usuarios del sistema
- Usar contraseñas fuertes y políticas de expiración

---

## ✨ Conclusión

**/etc/passwd** y **/etc/shadow** son como el registro civil de tu sistema:  
Uno dice *quién eres* y el otro *qué tan protegida está tu identidad*.  
Y en un pentest… ¡pueden abrir las puertas del reino! 😈📜

> _"No necesitas root si puedes romper el shadow."_ — **l1ttl3bugc4t**

---
