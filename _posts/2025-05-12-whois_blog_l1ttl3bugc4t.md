
---
layout: post
title: "WHOIS: El detective digital de los dominios"
author: "l1ttl3bugc4t"
date: "2025-05-12"
tags: [Redes, Comandos, Whois, Investigación]
categories: [cuaderno, Seguridad para Muggles, CyberChallenges]
---

¿Alguna vez quisiste saber quién está detrás de un dominio? 🕵️‍♀️🌐  
El comando **WHOIS** es tu herramienta galáctica para obtener información pública sobre dominios, direcciones IP, servidores y organizaciones. ¡Vamos a espiarlo todo legalmente! 😼💜

---

## 🌠 ¿Qué es WHOIS?

**WHOIS** es un protocolo que permite consultar bases de datos públicas para obtener información de registro sobre:

- Nombres de dominio
- Direcciones IP
- Servidores DNS
- Organizaciones asociadas

Es como pedirle a una base de datos galáctica que te diga "¿quién registró este planeta digital?". 🌍✨

---

## 🛰️ ¿Para qué sirve WHOIS?

- 📬 Saber quién registró un dominio
- 🧠 Identificar responsables de infraestructura de red
- 🔐 Verificar fechas de expiración de dominios
- 🎯 Obtener datos para un análisis de OSINT o ciberinteligencia
- 👀 Saber si un dominio está disponible

---

## 🐾 ¿Cómo se usa WHOIS?

Desde una terminal o consola:

```bash
whois <dominio>
```

**Ejemplo:**

```bash
whois google.com
```

Esto devolverá un bloque de texto con datos como:

- Nombre del registrante
- Empresa registradora (registrar)
- Fecha de creación y expiración del dominio
- Contacto administrativo y técnico
- Servidores DNS asociados

---

## 🔍 Ejemplo de salida WHOIS (resumido)

```
Domain Name: GOOGLE.COM
Registrar: MarkMonitor Inc.
Updated Date: 2024-09-08
Creation Date: 1997-09-15
Registry Expiry Date: 2028-09-14
Name Server: NS1.GOOGLE.COM
Name Server: NS2.GOOGLE.COM
...
```

> 🧠 Ten en cuenta que mucha información personal ahora se encuentra oculta o protegida por **GDPR** u otras regulaciones de privacidad.

---

## 🔧 WHOIS online

También puedes consultar información WHOIS desde sitios web como:

- https://whois.domaintools.com/
- https://lookup.icann.org/
- https://who.is/

¡Súper útil si no tienes acceso a una terminal o estás en modo móvil! 📱✨

---

## 🛡️ Consideraciones de seguridad

- Algunos atacantes usan WHOIS para recopilar información sensible en fases de reconocimiento.
- Es una técnica común en OSINT (Open Source Intelligence).
- Dominios con información WHOIS oculta aumentan la privacidad y seguridad.

---

## 🐱‍💻 Buenas prácticas hacker

- Usa WHOIS para investigar ciberincidentes (phishing, malware, etc.).
- Cruza la info con otros servicios como Shodan, Censys o DNSdumpster.
- Nunca subestimes el poder de un simple comando de texto.

---

## 🚩 Conclusión Galáctica

**WHOIS** es como un archivo estelar público: lleno de pistas, fechas y nombres que te ayudan a rastrear dominios y direcciones IP.  
Es una herramienta esencial en la caja de herramientas de toda hacker curiosa del ciberespacio. 💫

> 🐾✨ _"Si quieres saber quién manda en un rincón del internet, pregúntale a WHOIS."_ — **l1ttl3bugc4t**

---
