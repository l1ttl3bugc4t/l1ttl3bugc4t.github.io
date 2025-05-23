---
layout: post
title: "Usando Nmap dentro de Metasploit: Exploración con superpoderes"
author: "l1ttl3bugc4t"
date: "2025-05-23"
tags: [Hacking, Pentesting, Nmap, Metasploit, Red Team]
categories: [cuaderno, Red Team & Chill, CyberChallenges]
---

¿Qué pasa cuando unes el escáner más famoso con el framework de explotación más poderoso?  
¡Boom! Tienes una súper herramienta: **Nmap dentro de Metasploit**. 🌌⚡

---

## 🛰️ ¿Por qué usar Nmap en Metasploit?

- Puedes guardar resultados directamente en la base de datos de Metasploit.
- Facilita el **reconocimiento y explotación** sin salir del entorno.
- Puedes usar los datos para elegir exploits automáticamente.
- Organiza sesiones, hosts, servicios y puertos en un mismo lugar.

---

## 🐾 Pasos para usar Nmap dentro de Metasploit

### 1. Inicia Metasploit

```bash
msfconsole
```

### 2. Usa el comando especial `db_nmap`

```bash
db_nmap -v -sV -p 1-1000 192.168.1.0/24
```

Este comando:

- Ejecuta Nmap
- Guarda automáticamente todos los hosts, puertos y servicios en la base de datos interna de Metasploit

> 💡 Usa `-sV` para detección de versiones  
> Usa `-O` si quieres fingerprinting de SO

---

## 🔍 Consultar resultados escaneados

Dentro de `msfconsole`, puedes usar estos comandos para ver lo que descubriste:

- `hosts` – Lista de hosts encontrados
- `services` – Lista de servicios y puertos abiertos
- `vulns` – Vulnerabilidades (si hiciste escaneo con scripts NSE)
- `creds` – Credenciales encontradas
- `notes` – Información adicional por host

---

## 💫 Ejemplo de uso completo

```bash
msfconsole
db_nmap -sS -sV -T4 -p- 192.168.1.10
hosts
services
```

Después de ver los servicios, puedes buscar exploits compatibles:

```bash
search type:exploit name:<servicio>
```

Y luego:

```bash
use <módulo>
set RHOSTS 192.168.1.10
exploit
```

---

## 🔐 Consideraciones

- Puedes combinar `db_nmap` con scripts NSE si tienes Nmap configurado para usarlos.
- Ideal para laboratorios y pentesting interno.
- **Evita escanear redes externas sin permiso**.

---

## 🐱‍💻 Tip Hacker

- Si vas a escanear redes grandes, agrega `-oA scanresult` para guardar salidas tradicionales.
- Puedes importar escaneos hechos con Nmap fuera de Metasploit:

```bash
db_import scan.xml
```

(usa `-oX scan.xml` al exportar desde Nmap)

---

## 🚩 Conclusión Galáctica

Usar **Nmap dentro de Metasploit** es como instalarle un radar de reconocimiento a tu nave nodriza.  
Con esta combinación puedes descubrir, registrar y explotar sin salir de tu consola hacker favorita. 😼🚀

> 🐾 _"Primero escaneas, luego conquistas."_ — **l1ttl3bugc4t**

---
