
---
title: "XSS: Cuando tu navegador obedece al atacante"
author: "l1ttl3bugc4t"
date: "2025-05-12"
tags: [XSS, Cross-Site Scripting, Seguridad Web, Pentesting, Red Team, Inyección]
categories: [Cuaderno, Red Team & Chill, CyberChallenges]
---

**XSS (Cross-Site Scripting)** es como un hechizo maldito: haces que el navegador de la víctima ejecute código **sin que lo sepa** 😼💻💥

---

## 🧠 ¿Qué es XSS?

Es una vulnerabilidad que permite inyectar **código malicioso en páginas web** que será interpretado por el navegador de otros usuarios.  
Se puede usar para:
- Robar cookies y sesiones
- Mostrar contenido falso
- Redirigir a páginas maliciosas
- Ejecutar keyloggers o cargar scripts externos

---

## 🍬 Tipos de XSS

| Tipo | Descripción |
|------|-------------|
| **Reflejado** | El payload va en la URL o formulario y se refleja en la respuesta (típico en búsquedas o errores) |
| **Almacenado** | El código malicioso se guarda en la base de datos y se muestra a todos los usuarios que visiten esa parte |
| **DOM-Based** | La vulnerabilidad está en el JavaScript del cliente, sin interacción directa del servidor |

---

## 🔥 Ejemplos de Payloads

```html
<script>alert('Meow XSS');</script>
```

```html
<img src=x onerror=alert('XSS')>
```

```html
<svg onload=alert('Purrr')>
```

---

## 🧪 Detección

- Manipula parámetros en URLs, formularios y cookies
- Busca entradas que se reflejen sin sanitización
- Usa herramientas como:
  - `XSStrike`
  - `DalFox`
  - `Burp Suite` (Intruder + Repeater)
  - `OWASP ZAP`

---

## 🚀 Escenarios típicos

- Buscadores internos
- Comentarios y foros
- Paneles de administración
- Headers HTTP reflejados en el frontend

---

## 🧯 Prevención (del lado del dev)

- Escapar correctamente HTML, JavaScript y atributos
- Usar `Content Security Policy (CSP)`
- Validación del lado servidor y cliente
- Librerías como DOMPurify para limpiar HTML

---

## ⚠️ En pentesting recuerda:

- ¡No uses `alert()` como único test!
- Prueba con payloads personalizados, encodeados, y con saltos de contexto
- ¡Muchos WAFs bloquean los payloads más comunes!

---

## 🎮 Ejercicio divertido

Visita [XSS Game de Google](https://xss-game.appspot.com/) y pon a prueba tus habilidades 🧙‍♂️💥

---

## ✨ Conclusión

El XSS no solo es una alerta, es una **puerta abierta** al navegador de otro.  
Y tú, l1ttl3bugc4t, puedes convertir esa puerta en una entrada silenciosa o un show de fuegos artificiales 🎆😼

> _"Donde otros ven formularios, yo veo vectores de entrada."_ — **l1ttl3bugc4t**

---
