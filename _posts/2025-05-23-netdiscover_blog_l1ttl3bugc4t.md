---
title: "Netdiscover: Descubriendo dispositivos ocultos en tu red local"
author: "l1ttl3bugc4t"
date: "2025-05-23"
tags: [Hacking, Pentesting, Netdiscover, Red Team, Reconocimiento]
categories: [cuaderno, Red Team & Chill, CyberChallenges]
---

A veces los dispositivos en una red no quieren ser encontrados...  
Pero tú tienes un radar hacker llamado **Netdiscover** para eso. 🛸📡

---

## 🌠 ¿Qué es Netdiscover?

**Netdiscover** es una herramienta de reconocimiento pasivo y activo que permite descubrir **hosts en redes locales**.  
Ideal para cuando no tienes acceso a Nmap o necesitas algo rápido, simple y efectivo para mapear la red.

> 💡 Muy útil en laboratorios, entornos de pentesting o cuando te conectas a redes nuevas y desconocidas.

---

## 🛰️ ¿Para qué sirve Netdiscover?

- 🧭 Descubrir dispositivos conectados a tu red local
- 🧠 Identificar direcciones IP y MAC asociadas
- 📶 Detectar routers, switches, cámaras, IoT y otros equipos
- 🔒 Reconocimiento sin enviar demasiados paquetes sospechosos

---

## 🐾 ¿Cómo se usa Netdiscover?

### Escaneo pasivo (modo sigiloso)

```bash
netdiscover -p
```

Escucha el tráfico ARP que circula sin enviar nada. Ideal para ambientes sensibles.

### Escaneo activo (modo recomendado)

```bash
sudo netdiscover -r 192.168.1.0/24
```

Escanea toda la red `/24` buscando quién responde a solicitudes ARP.

> Puedes cambiar el rango según tu red (ej: `10.0.0.0/16` o `172.16.0.0/24`)

---

## 🔧 Flags útiles de Netdiscover

| Flag               | Descripción                                     |
|--------------------|-------------------------------------------------|
| `-i <interfaz>`    | Especifica la interfaz (ej. eth0, wlan0)        |
| `-r <rango>`       | Rango de IPs a escanear                         |
| `-p`               | Modo pasivo (no envía paquetes)                |
| `-s <velocidad>`   | Define velocidad del escaneo (1–5, por defecto 2)|
| `-l`               | Guarda resultados en archivo                    |

---

## 🔍 Ejemplo práctico

```bash
sudo netdiscover -i wlan0 -r 192.168.0.0/24 -s 3
```

Esto escanea la red local WiFi a velocidad media, útil para identificar todos los dispositivos conectados.

---

## 🛡️ Consideraciones éticas y técnicas

- Netdiscover no necesita instalación compleja: suele venir preinstalado en Kali Linux.
- No funciona fuera de tu red local (no cruza routers).
- Ideal para reconocimiento inicial, no reemplaza herramientas como Nmap para escaneo profundo.

---

## 🐱‍💻 Buenas prácticas hacker

- Úsalo apenas te conectes a una red: te dirá qué hay y qué MACs podrían delatar dispositivos ocultos.
- Compara con resultados de `arp-scan` o `nmap -sn` para validación cruzada.
- Útil en pentests de red interna o auditorías físicas (ej: oficinas, escuelas, cafés).

---

## 🚩 Conclusión Galáctica

**Netdiscover** es tu radar personal en redes locales.  
Rápido, silencioso y sin complicaciones, es perfecto para reconocer el terreno antes de lanzar una ofensiva técnica. 😼🧭

> 🐾✨ _"La red no te ve... pero tú sí la ves a ella."_ — **l1ttl3bugc4t**

---
