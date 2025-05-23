---
layout: post
title: "Descubriendo puertos y servicios con Metasploit: Exploración sin salir del framework"
author: "l1ttl3bugc4t"
date: "2025-05-23"
tags: [Metasploit, Escaneo, Puertos, Servicios, Red Team]
categories: [cuaderno, Red Team & Chill, CyberChallenges]
---

¿Sabías que no necesitas salir de Metasploit para hacer escaneos y descubrir servicios?  
Con sus **módulos auxiliares**, puedes mapear tu objetivo desde la comodidad de tu consola. 🛠️🛰️

---

## 🌌 ¿Qué son los módulos auxiliares en Metasploit?

Los **módulos auxiliares** son herramientas incluidas en Metasploit que **no explotan vulnerabilidades directamente**, sino que ayudan a:

- Escanear puertos
- Detectar servicios
- Enumerar versiones
- Realizar reconocimiento activo o pasivo

> 🧠 Perfectos para la fase de información previa al ataque.

---

## 🛰️ ¿Cómo buscar módulos de escaneo?

Dentro de `msfconsole`, puedes usar:

```bash
search scanner
```

O si quieres buscar algo más específico:

```bash
search type:auxiliary name:portscan
```

Esto te mostrará joyas como:

- `auxiliary/scanner/portscan/tcp`
- `auxiliary/scanner/portscan/syn`
- `auxiliary/scanner/http/title`
- `auxiliary/scanner/ssh/ssh_version`
- `auxiliary/scanner/smb/smb_version`

---

## 🐾 Ejemplo de escaneo de puertos con Metasploit

### 1. Cargar el módulo

```bash
use auxiliary/scanner/portscan/tcp
```

### 2. Ver las opciones

```bash
show options
```

### 3. Configurar el objetivo

```bash
set RHOSTS 192.168.1.10
set THREADS 10
```

### 4. Ejecutar

```bash
run
```

> 💡 También puedes usar `set PORTS 1-1000` para escanear rangos personalizados.

---

## 🔧 Módulos recomendados para puertos y servicios

| Módulo | Función |
|--------|---------|
| `scanner/portscan/tcp` | Escaneo TCP normal |
| `scanner/portscan/syn` | Escaneo SYN (más sigiloso) |
| `scanner/ssh/ssh_version` | Detecta versión del servicio SSH |
| `scanner/smb/smb_version` | Detecta versión del SMB (¡muy útil para Windows!) |
| `scanner/http/http_version` | Muestra headers de respuesta HTTP |
| `scanner/http/title` | Muestra el título HTML de páginas web |
| `scanner/mysql/mysql_version` | Versión del servicio MySQL |
| `scanner/ftp/ftp_version` | Verifica versión de servicio FTP |

---

## 🔍 ¿Y luego qué hago con los datos?

Una vez que sabes qué servicios hay disponibles:

1. Usa `search <servicio>` para encontrar exploits compatibles
2. Carga el exploit: `use exploit/<plataforma>/<servicio>`
3. Configura `RHOSTS` y ejecuta

¡Y que empiece la conquista digital! 🚀😼

---

## 🛡️ Ética y precauciones

- Usa estos módulos solo en entornos que te pertenecen o donde tienes autorización.
- Muchos escáneres pueden generar alertas en IDS o firewalls.
- Si estás en modo sigiloso, considera usar `db_nmap` o `scanner/portscan/syn` con pocos hilos.

---

## 🐱‍💻 Buenas prácticas hacker

- Combina escaneos de Metasploit con `Nmap` para resultados más completos.
- Usa `services` y `hosts` en Metasploit para ver y filtrar tus resultados.
- Aprovecha los datos guardados para automatizar post-explotación después.

---

## 🚩 Conclusión Galáctica

**Metasploit no es solo para explotar, también es para explorar**.  
Sus módulos de escaneo te permiten conocer a tu objetivo como la palma de tu garra felina. 🐾🧠

> ✨ _"El conocimiento es poder. Y Metasploit tiene módulos para todo."_ — **l1ttl3bugc4t**

---
