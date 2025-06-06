---
title: "Dirb: Explorador web discreto pero letal"
author: "l1ttl3bugc4t"
date: "2025-06-06"
tags: [Dirb, Fuzzing, Web Pentesting, Fuerza Bruta, Directorios, Red Team]
categories: [cuaderno, Red Team & Chill, CyberChallenges]
---

Cuando quieres buscar archivos y directorios ocultos **desde la terminal**, rápido y sin drama…  
**Dirb** es tu mejor gato ninja 🐈‍⬛💥

---

## 🧠 ¿Qué es Dirb?

**Dirb** es una herramienta de fuerza bruta para descubrir recursos ocultos en servidores web.  
Funciona con wordlists y analiza las respuestas HTTP para detectar rutas válidas.  
Es simple, ligero y muy efectivo en entornos minimalistas (¡ideal para CTFs o pentests rápidos!).

---

## ⚙️ Uso básico

```bash
dirb http://<objetivo>
```

Ejemplo:
```bash
dirb http://192.168.0.100/
```

Esto lanzará un escaneo con la wordlist por defecto (`/usr/share/dirb/wordlists/common.txt`).

---

## 🧪 Opciones útiles

### 📁 Especificar wordlist

```bash
dirb http://<objetivo> /ruta/a/wordlist.txt
```

### 🎯 Buscar extensiones específicas (como `.php`)

```bash
dirb http://<objetivo> -X .php
```

También puedes poner múltiples extensiones:
```bash
dirb http://<objetivo> -X .php,.html,.bak
```

### 📜 Exportar resultados

```bash
dirb http://<objetivo> -o resultado.txt
```

---

## 💡 Tips felinos

- Combina Dirb con `proxychains` para rutearlo a través de Tor o un proxy
- Ideal para identificar archivos `.bak`, `.old`, `.zip`
- Puedes modificar tus propias wordlists para targets específicos
- Perfecto como parte de tu fase de enumeración web antes de lanzar payloads

---

## ⚔️ ¿Por qué usar Dirb?

- No requiere entorno gráfico
- Muy útil en entornos con pocos recursos (máquinas virtuales, contenedores)
- Rápido y sin mucha configuración
- Compatible con scripting y automatización

---

## 🚩 Precauciones

- Algunas rutas pueden devolver falsos positivos (respuestas 200 personalizadas)
- No tiene detección de WAFs ni verificación avanzada
- Puede ser detectado como actividad maliciosa

---

## 🚀 Conclusión

**Dirb** es como ese gato que entra silenciosamente a todos lados, detecta lo que nadie ve, y se va sin dejar huella 😼💻  
Una herramienta que no debe faltar en tu cinturón de pentesting terminalero.

> ✨ _"No necesitas ser ruidoso para encontrar lo oculto. Solo ser persistente."_ — **l1ttl3bugc4t**

---
