---
layout: post
title: "Consulta WHOIS desde ICANN: Espiando dominios como una hacker elegante"
author: "l1ttl3bugc4t"
date: "2025-05-30"
tags: [WHOIS, ICANN, Recolección de Información, Hacking, OSINT]
categories: [cuaderno, Red Team & Chill, CyberChallenges]
---

A veces, todo empieza con un dominio. Y si quieres saber **quién está detrás de uno**, el primer paso felino es...  
**¡consultar WHOIS como una pro!** 😼🌐

---

## 🌠 ¿Qué es WHOIS?

Es un protocolo utilizado para consultar información sobre la **propiedad y administración de nombres de dominio** en internet.

Proporciona datos como:
- Nombre del registrante
- Organización
- Email o contacto técnico
- Servidores DNS
- Fechas de creación, expiración y modificación

---

## 🛰️ ¿Qué es ICANN?

La **ICANN** (Internet Corporation for Assigned Names and Numbers) es la organización que coordina la asignación de nombres de dominio, direcciones IP y registros de dominios a nivel mundial.

Desde su sitio web puedes hacer consultas WHOIS oficiales.

---

## 🐾 Cómo usar el sitio de ICANN para WHOIS

1. Entra a: [https://lookup.icann.org](https://lookup.icann.org)
2. Escribe el dominio que quieres investigar (ej. `example.com`)
3. Haz clic en “Lookup”
4. ¡Listo! Aparecerá la información pública del dominio.

---

## 🔍 ¿Qué puedo descubrir?

- Si un dominio está **registrado**
- Cuándo fue **creado y cuándo expirará**
- A qué **registrador** pertenece (ej. GoDaddy, Namecheap)
- Contactos administrativos y técnicos (si no están protegidos por privacidad)
- Si tiene activada **protección de WHOIS** (privacidad de datos)

---

## 🛡️ Consideraciones

- Muchos dominios ahora están protegidos con **WHOIS Privacy Protection**, por lo que no siempre verás datos personales.
- Es una técnica de **OSINT** muy común en etapas de reconocimiento (footprinting).
- Puedes usarla para correlacionar dominios, IPs, nombres, o detectar infraestructura compartida.

---

## 🚀 Bonus Hack

Si ves que el dominio **compartió correo o nombre de registrante** con otros dominios, puedes buscar en:
- [https://crt.sh](https://crt.sh) — para ver certificados SSL emitidos
- [https://hunter.io](https://hunter.io) — para rastrear correos
- [https://dnsdumpster.com](https://dnsdumpster.com) — para ver infraestructuras relacionadas

---

## 🚩 Conclusión Galáctica

Saber usar el buscador WHOIS de ICANN es tener un telescopio para espiar **quién está detrás de la cortina digital** 👁️‍🗨️

> ✨ _"Los dominios hablan... solo hay que saber escuchar sus registros."_ — **l1ttl3bugc4t**

---
