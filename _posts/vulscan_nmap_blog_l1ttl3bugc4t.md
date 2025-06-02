
---
title: "Vulscan para Nmap: CVEs directos en tu terminal"
author: "l1ttl3bugc4t"
date: "2025-05-12"
tags: [Vulscan, Nmap, CVE, Vulnerabilidades, Red Team, Escaneo, NSE]
categories: [Cuaderno, Red Team & Chill, CyberChallenges]
---

**¿Y si Nmap pudiera mostrarte los CVEs conocidos de los servicios detectados?**  
Eso es exactamente lo que hace **Vulscan**, una navaja suiza de vulnerabilidades para tus escaneos con Nmap 😼💣

---

## 🧠 ¿Qué es Vulscan?

Es un script NSE (Nmap Scripting Engine) que compara los resultados de escaneo con bases de datos públicas de vulnerabilidades.  
Detecta **CVE IDs**, referencias a Exploit-DB, OpenVAS, y más, directamente desde Nmap.

---

## 🛠️ Instalación de Vulscan

```bash
cd /usr/share/nmap/scripts
git clone https://github.com/scipag/vulscan.git
```

Después, asegúrate de tener los archivos `.csv` descargados (se incluyen en el repo).  
¡Y listo! Ya puedes correrlo desde Nmap.

---

## 🔍 Uso básico

```bash
nmap -sV --script vulscan/vulscan.nse <IP>
```

Ejemplo:
```bash
nmap -sV --script vulscan/vulscan.nse 192.168.1.100
```

---

## 🎯 Uso con base de datos específica

Puedes especificar qué base usar:
```bash
nmap -sV --script vulscan/vulscan.nse --script-args vulscandb=exploitdb.csv <IP>
```

Bases soportadas:
- CVE
- SecurityFocus BID
- Exploit-DB
- OpenVAS
- osvdb
- CERT

---

## 💥 Tip para combinar con otros scripts

```bash
nmap -sV --script "default,vulscan/vulscan.nse" <IP>
```

---

## 🧠 ¿Por qué usarlo?

- Detecta **vulnerabilidades específicas y nombradas (CVE)**
- Es rápido y **no intrusivo**
- No necesitas otra herramienta o API
- Facilita el reconocimiento en fases tempranas del pentest

---

## ⚠️ Precauciones

- Depende de la precisión de `-sV` (detección de versión)
- No valida si la vulnerabilidad realmente **afecta** al servicio
- Ideal como primer paso, pero no como único escáner

---

## 🚀 Conclusión

**Vulscan** convierte a Nmap en un radar que no solo ve puertos abiertos, sino también **qué tan rotos están esos servicios**.  
¡Perfecto para enriquecer tus reportes y planear ataques! 😼🕷️

> ✨ _"Detrás de cada puerto hay una historia... y a veces, un CVE."_ — **l1ttl3bugc4t**

---
