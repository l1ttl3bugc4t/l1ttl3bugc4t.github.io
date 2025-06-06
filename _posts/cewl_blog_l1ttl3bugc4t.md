--- 
layout: post
title: "CeWL: Cazando palabras clave para atacar contraseñas"
author: "l1ttl3bugc4t"
date: "2025-06-06"
tags: [CeWL, Wordlists, Fuerza Bruta, OSINT, Pentesting, Red Team]
categories: [cuaderno, Red Team & Chill, CyberChallenges]
---

¿Quieres generar wordlists 100% personalizadas a tu víctima usando su propio sitio web?  
**CeWL** es la arañita perfecta para eso 🕷️💜

---

## 🧠 ¿Qué es CeWL?

**CeWL** (pronunciado "cool") es una herramienta escrita en Ruby que hace **web crawling** para recolectar palabras.  
Su principal uso es construir wordlists personalizadas para ataques de fuerza bruta basados en el contenido real de un sitio web.

---

## 🎯 ¿Para qué sirve?

- Generar listas de posibles contraseñas o usuarios
- Crear wordlists adaptadas al lenguaje de una empresa, institución o marca
- Complementar herramientas como `hydra`, `john` o `dirb`

---

## ⚙️ Uso básico

```bash
cewl http://victima.com
```

Esto escaneará el sitio y generará una lista con palabras únicas de 6 letras o más.

---

## 🔧 Flags útiles

### 📏 Cambiar longitud mínima de palabras
```bash
cewl -m 4 http://victima.com
```

### 📁 Exportar wordlist a un archivo
```bash
cewl -w lista.txt http://victima.com
```

### 🧗‍♀️ Escaneo recursivo con profundidad
```bash
cewl -d 3 http://victima.com
```

### 🔑 Buscar correos electrónicos
```bash
cewl --email http://victima.com
```

### 🔒 Autenticación básica HTTP
```bash
cewl --auth user:pass http://victima.com
```

---

## 🧪 Ejemplo completo

```bash
cewl -d 3 -m 4 -w customlist.txt --email http://empresa.com
```

Este comando:
- Hace crawling hasta profundidad 3
- Toma palabras de mínimo 4 letras
- Guarda resultados en `customlist.txt`
- Extrae correos electrónicos

---

## 💡 Pro Tips galácticos

- Úsalo en sitios con contenido real, tipo "Quiénes somos", noticias, blogs, etc.
- Complementa tus diccionarios estándar con esta wordlist para ataques híbridos
- Puedes luego aplicar reglas en `john` o `hashcat` para mutar las palabras recolectadas

---

## ⚠️ Consideraciones

- No detecta JavaScript dinámico ni contenido AJAX
- No reemplaza a grandes wordlists, ¡las potencia!
- Respeta el `robots.txt` (aunque puedes forzar sin hacerlo)

---

## 🚀 Conclusión

**CeWL** es como ese hacker que primero se lee todo tu blog antes de intentar adivinar tu contraseña 😼🔓  
Ideal para ataques más dirigidos, personalizados y… efectivos.

> ✨ _"Tus palabras te traicionan, padawan. CeWL las recolecta."_ — **l1ttl3bugc4t**

---
