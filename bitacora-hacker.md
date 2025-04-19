---
layout: page
title: "Tu Bitácora Hacker"
permalink: /bitacora-hacker/
---

# ✍️ Tu Bitácora Hacker

Este es mi rincón para documentar lo que aprendo, lo que rompo (con ética), lo que descubro y lo que me frustra mientras avanzo en el mundo de la ciberseguridad.

Aquí encontrarás entradas personales, reflexiones técnicas, logs de pruebas, avances de proyectos y pensamientos que cruzan por la mente de **l1ttl3bugc4t** en modo terminal.

---

## Último log publicado

### 📅 Bitácora Hacker - No era el sistema, era mi red

**Fecha:** 2025-04-14  
**Mood:** ☕ + 🧠  
**Duración del trip:** 2 horas de "¿por qué no conecta?" + 1 reinicio + 1 café

---

### 🔍 ¿Qué intenté hacer hoy?

Quise configurar un laboratorio local entre mi Kali y una máquina Metasploitable 2 para practicar escaneo con Nmap.

---

### 🐞 ¿Qué falló?

La red NAT no funcionaba. Nada respondía, pensé que era un bug de Kali.  
Después de 2 cafés y muchos pings fallidos…  
era la configuración de red mal puesta en VirtualBox. Ups.

---

### ✨ ¿Qué aprendí?

- Cómo revisar adaptadores de red en VirtualBox  
- A identificar interfaces con `ip a`  
- A nunca subestimar el poder de apagar y prender otra vez

---

### 📎 Notas random o enlaces que quiero guardar

- [Cómo configurar red interna en VirtualBox](https://www.virtualbox.org/manual/ch06.html)
- `nmap -sP 192.168.56.0/24`
- Recordar: Metasploitable no siempre responde al primer ping

---

### 🐾 Reflexión del día

Pensé que era el sistema…  
**pero era yo todo el tiempo.**

---

**by l1ttl3bugc4t**
