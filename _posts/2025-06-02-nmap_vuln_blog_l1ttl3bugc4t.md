---
title: "Detección de vulnerabilidades con Nmap: Escaneo + Inteligencia"
author: "l1ttl3bugc4t"
date: "2025-06-02"
tags: [Nmap, Vulnerabilidades, Escaneo, NSE, Pentesting, Red Team]
categories: [cuaderno, Red Team & Chill, CyberChallenges]
---

Cuando combinas el escaneo de puertos con scripts inteligentes… Nmap se transforma en un **mini escáner de vulnerabilidades** 🧠✨  
¡Sí! Con los NSE (Nmap Scripting Engine) puedes detectar muchas fallas técnicas sin herramientas extra.

---

## 🧠 ¿Qué es el Nmap Scripting Engine?

Es una colección de scripts que extienden las capacidades de Nmap.  
Puedes usarlos para detectar vulnerabilidades, fallos de configuración, servicios inseguros, ¡y hasta contraseñas por defecto!

---

## 🎯 Escaneo de vulnerabilidades básico

```bash
nmap -sV --script vuln <IP>
```
> Esto escanea servicios y corre los scripts de categoría `vuln` para cada puerto.

Ejemplo:
```bash
nmap -sV --script vuln 192.168.1.100
```

---

## 🛠️ Scripts útiles para detección de vulnerabilidades

### 🔐 SSL/TLS
```bash
nmap --script ssl-enum-ciphers -p 443 <IP>
```

### 🧱 HTTP Server info
```bash
nmap --script http-methods,http-headers,http-title -p 80 <IP>
```

### 🔍 MS08-067 (famosa vulnerabilidad de Windows XP)
```bash
nmap --script smb-vuln-ms08-067 -p 445 <IP>
```

### 🪪 Usuarios por defecto en routers
```bash
nmap --script http-default-accounts -p 80 <IP>
```

### 🧪 Heartbleed
```bash
nmap --script ssl-heartbleed -p 443 <IP>
```

---

## 🔄 Automatización de múltiples scripts

Puedes combinar varios scripts:
```bash
nmap -p 80,443,21 --script "default or (vuln and not intrusive)" <IP>
```

---

## 💥 Pro tip galáctico

Descubre todos los scripts disponibles:
```bash
ls /usr/share/nmap/scripts/
```

O busca por tema:
```bash
grep categories /usr/share/nmap/scripts/*.nse | grep vuln
```

---

## ⚠️ Consideraciones

- Algunos scripts son intrusivos. Verifica si tienen la etiqueta `intrusive`
- Puede generar falsos positivos. Verifica con otra herramienta o manualmente
- Úsalos con fines educativos o en entornos autorizados

---

## 🚀 Conclusión

Nmap no solo abre puertas, también te dice si **esas puertas están rotas** 😼  
Con los scripts adecuados, puedes hacer un fingerprinting de seguridad bastante completo con muy poco esfuerzo.

> ✨ _"A veces no necesitas más herramientas. Solo necesitas más flags."_ — **l1ttl3bugc4t**

---
