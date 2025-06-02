
---
title: "Nessus: Tu radar de vulnerabilidades en la red"
author: "l1ttl3bugc4t"
date: "2025-05-12"
tags: [Nessus, Vulnerability Scanning, Pentesting, Red Team, Seguridad]
categories: [Cuaderno, Red Team & Chill, CyberChallenges]
---

**Nessus** es como un radar de alto poder para detectar vulnerabilidades en sistemas, servicios y redes.  
Es una de las herramientas más populares en el mundo del análisis de seguridad 💻📡

---

## 🧠 ¿Qué es Nessus?

Es un escáner de vulnerabilidades desarrollado por Tenable.  
Su misión: **detectar debilidades técnicas**, desde configuraciones inseguras hasta servicios desactualizados o mal parcheados.

Nessus es:
- Amigable con el usuario (interfaz web)
- Automatizable
- Bastante preciso
- Usado en auditorías, pruebas de cumplimiento y pentests

---

## 🧪 ¿Qué puede detectar?

- Vulnerabilidades conocidas (CVEs)
- Configuraciones débiles
- Servicios expuestos o innecesarios
- Certificados caducados
- Fallos en bases de datos, web servers, firewalls, etc.
- Credenciales por defecto o configuraciones por omisión

---

## 🛠️ Cómo se usa (pasos básicos)

1. **Instalación**
   - Descarga desde: [https://www.tenable.com/products/nessus](https://www.tenable.com/products/nessus)
   - Está disponible para Linux, Windows y macOS

2. **Inicialización**
   - Crea una cuenta en Tenable
   - Obtén y activa tu código de activación (Home o Pro)
   - Accede vía navegador: `https://localhost:8834`

3. **Escaneo**
   - Crea una nueva política o usa una predeterminada
   - Define el objetivo (IP, rango, dominio)
   - Ejecuta el escaneo
   - Analiza los resultados con CVSS, exploits disponibles y soluciones

---

## 💥 En pentesting

Nessus es ideal para:
- Tener un mapa de debilidades técnicas
- Preparar un reporte para clientes o stakeholders
- Comprobar el estado de parcheo
- Cruce con herramientas ofensivas (Metasploit, manual exploits)

---

## 🧬 Automatización + Integraciones

- Puedes usar la **API REST de Nessus** para lanzar escaneos y recolectar resultados automáticamente
- Compatible con plataformas como Tenable.io, SIEMs, Jenkins, etc.

---

## 🔐 Precauciones y buenas prácticas

- ¡No escanees sin permiso! Algunos escaneos pueden tumbar servicios
- Usa políticas ligeras si estás en producción
- Programa los escaneos fuera de horas críticas

---

## 🧠 Pro tip para Red Team

Si estás en un entorno de evaluación silenciosa, evita usar Nessus directamente.  
Pero puedes **analizar sus resultados previos o combinarlos con tus hallazgos manuales.**

---

## 🚩 Conclusión

**Nessus** no lanza exploits, pero te da un panorama técnico que te prepara para lanzar los mejores ataques (o defenderlos mejor).  
Es el radar felino que necesitas antes de saltar a la acción 🐾🎯

> ✨ _"No puedes explotar lo que no ves. Escanea primero, ataca después."_ — **l1ttl3bugc4t**

---
