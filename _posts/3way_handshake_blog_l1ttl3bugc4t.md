
---
title: "3-Way Handshake: El saludo secreto de los dispositivos en la red"
author: "l1ttl3bugc4t"
date: "2025-05-12"
tags: [TCP, Network, 3-Way Handshake, Pentesting, Seguridad]
categories: [Cuaderno, Red Team & Chill, CyberChallenges]
---

Antes de que dos dispositivos puedan chismear por TCP, necesitan saludarse de forma segura.  
Ese saludo se llama **Three-Way Handshake** y es como un apretón de patas digital 🤝🐾

---

## 📡 ¿Qué es el 3-Way Handshake?

Es el proceso que establece una **conexión TCP confiable** entre dos hosts (cliente y servidor).  
Este proceso ocurre **antes** de que se transfieran datos.  
Se le llama "3-way" porque involucra **tres pasos** entre cliente y servidor.

---

## 🚦 Cómo funciona (paso a paso)

### 🥇 Paso 1: SYN
El **cliente** envía un paquete con la bandera `SYN` para decir:
> “Hola, quiero conectarme y este es mi número de secuencia inicial.”

### 🥈 Paso 2: SYN-ACK
El **servidor** responde con un paquete `SYN-ACK`:
> “Hola también. Aquí está mi número de secuencia y reconozco el tuyo.”

### 🥉 Paso 3: ACK
El **cliente** responde con un `ACK`:
> “Perfecto, confirmo todo. ¡Conectados!”

Y así... la conexión queda establecida. A partir de aquí pueden intercambiar datos confiables 🎉

---

## 🔍 Representación gráfica

```
Cliente                             Servidor
   | ----------- SYN ------------> |
   | <-------- SYN + ACK -------- |
   | ----------- ACK ------------> |
   | --------- ¡Conexión! -------- |
```

---

## 🧠 ¿Por qué importa esto en Pentesting?

Porque el `3-way handshake`:
- Es visible en herramientas como Wireshark o tcpdump
- Puede ser **falsificado (SYN spoofing)** para ataques DoS
- Sirve para detectar puertos abiertos con **nmap -sS (SYN scan)**

---

## 🧨 Casos ofensivos y defensivos

### Ataques:
- **SYN Flood**: enviar muchos paquetes SYN sin completar el handshake para saturar al servidor
- **Half-open connections**: el atacante no responde al SYN-ACK

### Detección:
- En un `.pcap`, puedes ver múltiples SYNs sin ACK como signo de escaneo o ataque
- Un firewall puede usar el handshake para filtrar conexiones sospechosas

---

## 🛡️ Tip de análisis

En Wireshark:
```bash
tcp.flags.syn == 1 && tcp.flags.ack == 0
```
> Esto te muestra todos los paquetes SYN puros (inicio del handshake)

---

## 🚩 Conclusión

El 3-way handshake es **la base de la confianza digital en TCP**.  
Sin él, los datos simplemente no fluyen.  
Y como pentester, entenderlo es **clave para detectar, analizar y atacar conexiones** 😼🌐

> ✨ _"Antes de compartir secretos, hay que saludarse."_ — **l1ttl3bugc4t**

---
