
---
title: "NetBIOS: El protocolo viejito pero todavía peligroso"
author: "l1ttl3bugc4t"
date: "2025-05-12"
tags: [NetBIOS, Red Team, Pentesting, Enumeración, Windows, Seguridad en Red]
categories: [Cuaderno, Red Team & Chill, CyberChallenges]
---

**NetBIOS** (Network Basic Input/Output System) es uno de esos protocolos que parecen inofensivos por su edad… pero que aún hoy pueden ser una mina de información 🧠💣

---

## 🧬 ¿Qué es NetBIOS?

Es un servicio creado en los años 80 para permitir la comunicación entre aplicaciones en una red local (LAN).  
Aunque hoy en día se considera obsoleto, **aún está presente en muchos sistemas Windows**.

NetBIOS trabaja sobre los siguientes puertos:

| Puerto | Protocolo | Descripción |
|--------|-----------|-------------|
| 137 | UDP | Servicio de nombres NetBIOS (name service) |
| 138 | UDP | Servicio de datagramas |
| 139 | TCP | Sesión NetBIOS sobre TCP (común en Windows compartido) |

---

## 🔍 ¿Qué se puede hacer con NetBIOS en un pentest?

- Enumerar **nombres de host y usuarios**
- Descubrir **recursos compartidos**
- Ver **sesiones activas**
- Obtener **información del dominio o grupo de trabajo**
- Enumerar **controladores de dominio**

Todo esto **sin autenticación previa**, si el sistema está mal configurado 🐾😼

---

## 🛠️ Herramientas útiles

### 🐾 `nbtscan`

```bash
nbtscan 192.168.1.0/24
```
Escanea toda la red y lista nombres NetBIOS y direcciones MAC.

---

### 🐾 `enum4linux`

```bash
enum4linux -U 192.168.1.5
```
Obtiene información de usuarios vía NetBIOS y SMB.

---

### 🐾 `nmap`

```bash
nmap -p 137,138,139 --script nbstat.nse <IP>
```
Usa scripts NSE para extraer datos NetBIOS.

---

## 🚩 Indicadores de riesgo

- Comparticiones sin contraseña
- Servicios expuestos en red pública
- Equipos con NetBIOS habilitado sin necesidad
- Sin segmentación de red adecuada

---

## 🔐 ¿Cómo mitigar?

- **Deshabilitar NetBIOS** sobre TCP/IP si no es necesario
- Usar solo SMBv2 o SMBv3
- Bloquear puertos 137-139 en el firewall
- Segmentar correctamente las redes internas

---

## 🎯 ¿Por qué es útil para Red Team?

Porque **NetBIOS es silencioso** y muchas veces ignorado.  
Puede darte un mapa completo del entorno Windows antes de hacer ruido con exploits más invasivos.  
¡La info es poder, baby!

---

## ✨ Conclusión

**NetBIOS** es una reliquia que todavía guarda secretos.  
En un pentest interno, puede abrirte la puerta al reino Windows con solo un escaneo.

> _"Enumerar antes de explotar. NetBIOS siempre avisa."_ — **l1ttl3bugc4t**

---
