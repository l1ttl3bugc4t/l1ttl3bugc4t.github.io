---
layout: post
title: "OpenSSL: Tu bisturí para diseccionar conexiones seguras"
author: "l1ttl3bugc4t"
date: "2025-06-02"
tags: [OpenSSL, TLS, Pentesting, Cifrado, Red Team, HTTPS, Certificados]
categories: [cuaderno, Red Team & Chill, CyberChallenges]
---

**OpenSSL** no solo es una librería usada por miles de servicios…  
También es una herramienta poderosa para pentesters curiosos que quieren **explorar, analizar o explotar** conexiones cifradas 😼🔐

---

## 🧠 ¿Qué es OpenSSL?

Es una implementación de los protocolos SSL y TLS, y también una suite de herramientas en consola para:

- Conectarse a servicios HTTPS
- Generar y analizar certificados
- Crear conexiones cifradas
- Probar configuraciones TLS

---

## 🧪 Ejemplos ofensivos y útiles para pentesting

### 🌐 Ver detalles del certificado TLS
```bash
openssl s_client -connect <host>:443
```
> Esto se conecta como cliente TLS y te muestra el certificado, versión TLS, ciphers y más.

---

### 🔍 Ver solo el certificado (sin handshake completo)
```bash
echo | openssl s_client -connect <host>:443 2>/dev/null | openssl x509 -noout -text
```
> Ideal para ver fechas, CN, SANs, emisor, y más.

---

### 🔏 Checar qué versiones de TLS soporta un servidor
```bash
openssl s_client -connect <host>:443 -tls1_2
```
> Cambia `-tls1_2` por `-tls1`, `-tls1_3`, etc.

---

### 📄 Guardar certificado en archivo
```bash
echo | openssl s_client -connect <host>:443 | sed -ne '/-BEGIN CERTIFICATE-/,/-END CERTIFICATE-/p' > cert.pem
```

---

### 🛠️ Crear un certificado autofirmado
```bash
openssl req -x509 -newkey rsa:2048 -keyout key.pem -out cert.pem -days 365 -nodes
```

---

## 🧠 ¿Por qué importa en pentesting?

- Te permite analizar configuraciones HTTPS sin herramientas de terceros
- Puedes detectar **ciphers inseguros** o certificados caducos
- Ideal para **automatización de auditorías TLS**
- Es útil para validar certificados en escenarios de MiTM

---

## 🚩 Precauciones

- Algunos servidores limitan conexiones repetidas de herramientas como `openssl`
- No todos los servicios muestran la misma info si están detrás de un proxy o CDN
- Usa parámetros como `-servername` para SNI si el sitio usa hosting compartido:
```bash
openssl s_client -connect <host>:443 -servername <host>
```

---

## 💥 Bonus: Fuzzing TLS

¿Sabías que puedes usar `openssl s_client` con entradas malformadas para ver cómo reacciona un servidor?  
No es su propósito, pero puede ayudarte a detectar servicios mal configurados 👀

---

## 🧬 Conclusión

**OpenSSL** es como ese microscopio de red que siempre está ahí…  
y si sabes usarlo bien, puede mostrarte **todo lo que el TLS intenta ocultar** 🔎🔐

> ✨ _"El cifrado no es misterio... si sabes dónde mirar."_ — **l1ttl3bugc4t**

---
