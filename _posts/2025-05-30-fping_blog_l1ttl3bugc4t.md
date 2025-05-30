---
layout: post
title: "fping: El ping con esteroides para pentesters veloces"
author: "l1ttl3bugc4t"
date: "2025-05-30"
tags: [fping, Pentesting, Recolección de Información, Network Discovery, ICMP]
categories: [cuaderno, Red Team & Chill, CyberChallenges]
---

Cuando necesitas escanear hosts vivos **a la velocidad de un rayo**, no usas `ping`...  
Usas **fping**, la herramienta felina de pentesters para escanear múltiples hosts de forma paralela 🐾⚡

---

## 🧠 ¿Qué es fping?

`fping` es una herramienta como `ping`, pero diseñada para trabajar con **múltiples direcciones IP simultáneamente**.  
Es más rápida, más eficiente y perfecta para **descubrimiento de hosts en una red**.

---

## 🌐 ¿Para qué sirve en pentesting?

- Enumerar qué hosts están activos (vivos) en una red
- Detectar hosts accesibles rápidamente en rangos IP grandes
- Integrarse con otros scripts o fases de reconocimiento

---

## 🚀 Ejemplos de uso

### 🔹 Escanear un solo host
```bash
fping 192.168.0.1
```

### 🔹 Escanear una lista de hosts desde un archivo
```bash
fping < lista_ips.txt
```

### 🔹 Escanear un rango completo
```bash
fping -a -g 192.168.1.0 192.168.1.255
```
> `-a`: solo muestra los hosts que respondan  
> `-g`: genera un rango secuencial de IPs

### 🔹 Modo rápido y silencioso
```bash
fping -q -a -g 10.0.0.0/24
```
> `-q`: modo silencioso (solo errores)  
> Ideal para redireccionar salida a archivos

---

## 🔧 Opciones útiles

| Flag | Descripción |
|------|-------------|
| `-a` | Mostrar solo hosts que respondan |
| `-q` | Salida en modo silencioso |
| `-g` | Rango de IPs (inicio-fin o CIDR) |
| `-r` | Número de reintentos por host |
| `-t` | Tiempo de espera en milisegundos |
| `-s` | Muestra estadísticas al final |
| `-f` | Permite redireccionar desde archivo con `stdin` |

---

## 🛡️ Consideraciones para el uso

- Es mucho más rápido que `ping` tradicional, pero también puede ser detectado por IDS
- Algunos hosts/firewalls bloquean ICMP: no asumas que "no responde" = "está muerto"
- Ideal para usar **en redes internas** durante un pentest autorizado

---

## 🧠 Tip galáctico

Puedes combinarlo con herramientas como `xargs`, `grep`, o scripts para automatizar descubrimientos:

```bash
fping -a -g 192.168.1.0/24 2>/dev/null > vivos.txt
```

Y luego:

```bash
cat vivos.txt | while read ip; do nmap -sS $ip; done
```

---

## 🚩 Conclusión Espacial

`fping` es esa herramienta que no sabías que necesitabas…  
hasta que tienes que escanear 254 hosts y solo tienes 10 segundos 😼🕹️

> ✨ _"Ping es curioso... fping es despiadado."_ — **l1ttl3bugc4t**

---
