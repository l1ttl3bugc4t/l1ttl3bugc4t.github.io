---
layout: post
title: "Null Sessions: Accediendo sin llave a los secretos de Windows"
author: "l1ttl3bugc4t"
date: "2025-06-16"
tags: [Null Sessions, SMB, Enumeración, Windows, Red Team, Pentesting]
categories: [cuaderno, Red Team & Chill, CyberChallenges]
---

Las **Null Sessions** o sesiones nulas son un viejo truco del Red Team para acceder a recursos compartidos de Windows **sin necesidad de autenticación**. 😼🔓

---

## 🧠 ¿Qué son las Null Sessions?

Son conexiones **anónimas** que se realizan al servicio **SMB** de sistemas Windows.  
Si el sistema está mal configurado, permite enumerar información valiosa como:

- Usuarios del sistema 🧑‍💻  
- Grupos del dominio 👥  
- Recursos compartidos 📁  
- Políticas de seguridad 🔐  
- Controladores de dominio 🏰

Y todo esto… **sin un usuario ni contraseña** 😲

---

## 🕳️ ¿Dónde ocurren?

Principalmente en sistemas Windows antiguos o mal configurados, a través del **puerto 445 (SMB)**.

También puede afectar a equipos modernos si no han deshabilitado esta funcionalidad explícitamente.

---

## 🛠️ Cómo detectar y explotar Null Sessions

### 📍 Verificación rápida con `rpcclient`

```bash
rpcclient -U "" <IP>
```

Cuando te pida contraseña, solo presiona Enter.  
Si entras sin error, ¡el sistema es vulnerable!

---

### 🔎 Enumerar información

```bash
rpcclient -U "" <IP>
> enumdomusers
> enumdomains
> querydominfo
> queryuser RID
```

---

### 🔍 `enum4linux`

```bash
enum4linux -a <IP>
```

Este script aprovecha Null Sessions para obtener **todo lo que pueda** vía SMB y RPC.

---

### 🔥 `nmap` detection

```bash
nmap -p445 --script smb-enum-users,smb-enum-shares <IP>
```

Usa scripts NSE para verificar acceso no autenticado a recursos SMB.

---

## 🚩 Indicadores de riesgo

- Servidores Windows que permiten `anonymous logon`
- Recursos compartidos accesibles sin credenciales
- Falta de políticas de seguridad en SMB

---

## 🔐 ¿Cómo mitigar?

- **Desactivar Null Sessions** en el registro:
  ```
  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\LSA
  RestrictAnonymous = 1 o 2
  ```
- Configurar `Group Policy` para prohibir logins anónimos
- Usar `SMB signing` obligatorio
- Monitorizar accesos con cuentas nulas

---

## ✨ Conclusión

Las **Null Sessions** son una joyita vintage del pentesting.  
Aunque cada vez menos comunes, cuando aparecen, **pueden abrirte todo el dominio** sin que nadie se entere.

> _"Acceder sin credenciales... el sueño del gato curioso."_ — **l1ttl3bugc4t**

---
