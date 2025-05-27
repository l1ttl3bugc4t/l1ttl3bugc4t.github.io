---
layout: post 
title: "enum4linux: Enumerando sistemas Windows como una hacker felina"
author: "l1ttl3bugc4t"
date: "2025-05-12"
tags: [Hacking, Pentesting, Enum4linux, SMB, Red Team]
categories: [Cuaderno, Red Team & Chill, CyberChallenges]
---

Cuando te enfrentas a un servidor Windows en la red y quieres saber todo sobre él…  
¡**enum4linux** es tu amiga chismosa experta en SMB! 😼🗃️

---

## 🌠 ¿Qué es enum4linux?

**enum4linux** es una herramienta escrita en Perl que permite enumerar información detallada de sistemas Windows a través del servicio SMB (Server Message Block).

Se basa en herramientas como `rpcclient`, `net`, `smbclient`, y `nmblookup` para recopilar toda la información que pueda sin necesidad de credenciales (aunque también funciona con autenticación).

> 🧠 Súper útil en pentesting, CTFs y reconocimiento de red cuando encuentras un puerto 139 o 445 abierto.

---

## 🛰️ ¿Para qué sirve enum4linux?

- Enumerar usuarios del sistema
- Listar grupos y miembros
- Ver shares compartidos
- Mostrar políticas de contraseñas
- Identificar el nombre del dominio y el host
- Extraer información vía RID cycling
- Conocer controladores de dominio

---

## 🐾 Sintaxis básica

```bash
enum4linux <IP>
```

¡Y a esperar la tormenta de datos! 🌪️💻

---

## 🔧 Flags útiles

| Flag       | Descripción                                        |
|------------|----------------------------------------------------|
| `-U`       | Lista de usuarios                                  |
| `-S`       | Shares disponibles                                 |
| `-P`       | Políticas del sistema                              |
| `-G`       | Lista de grupos                                    |
| `-a`       | Modo completo (todos los módulos juntos)           |
| `-u USER`  | Usuario para autenticación (opcional)              |
| `-p PASS`  | Contraseña para autenticación (opcional)           |

---

## 🔍 Ejemplo práctico

```bash
enum4linux -a 192.168.1.10
```

Esto ejecutará **todos los módulos disponibles** contra el host y mostrará:

- Nombre NetBIOS
- Usuarios y grupos
- Shares SMB
- Política de contraseñas
- Info de dominio

---

## 🛡️ Consideraciones

- Solo funciona si el puerto 139 o 445 está abierto.
- En sistemas más modernos (Windows 10/11/Server 2016+), SMB puede estar más restringido.
- Si no obtienes resultados, prueba con `smbclient -L <host>` o `smbmap`.

---

## 🐱‍💻 Buenas prácticas hacker

- Úsalo junto con `nmap --script smb*` para más cobertura.
- Si ves cuentas como `guest`, prueba autenticación nula (`-u "" -p ""`).
- Complementa con `crackmapexec smb` si estás haciendo reconocimiento más avanzado.
- Guarda la salida para analizarla con calma, enum4linux puede soltar muuucha info.

---

## 🚩 Conclusión Galáctica

**enum4linux** es como un escáner de rayos X para sistemas Windows en red.  
Silenciosa, detallada y directa al objetivo, te da pistas valiosas para tu siguiente movimiento.

> 🐾✨ _"Donde hay un puerto 445, hay secretos por enumerar."_ — **l1ttl3bugc4t**

---
