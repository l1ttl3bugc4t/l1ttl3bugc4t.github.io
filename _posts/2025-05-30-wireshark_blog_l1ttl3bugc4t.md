---
layout: post
title: "Wireshark para Pentesters: Caza de paquetes como una hacker con visión de rayos X"
author: "l1ttl3bugc4t"
date: "2025-05-30"
tags: [Wireshark, Network Sniffing, Análisis de Tráfico, Pentesting, Packet Capture]
categories: [cuaderno, Red Team & Chill, CyberChallenges]
---

**Wireshark** es como un microscopio para el tráfico de red:  
te deja ver **cada paquete**, **cada bit**, **cada suspiro digital** de una red.  
Y sí, es una de las herramientas más poderosas del arsenal de un pentester 😼📡

---

## 🐾 ¿Qué es Wireshark?

Wireshark es un analizador de protocolos de red (packet sniffer) que permite **capturar y visualizar tráfico** en tiempo real o desde archivos `.pcap`.

Ideal para:
- Analizar protocolos
- Inspeccionar transmisiones inseguras
- Detectar credenciales en texto plano
- Observar comportamiento sospechoso
- Reconstruir sesiones

---

## 🛰️ Casos de uso comunes en Pentesting

- Captura de credenciales (HTTP, FTP, Telnet, POP3)
- Inspección de peticiones DNS
- Descubrimiento de dispositivos en red
- Análisis de paquetes maliciosos o exploit attempts
- Validación de tráfico cifrado y su intercambio de claves

---

## 🎛️ Filtros y banderas útiles (Display Filters)

### 🎯 Filtros básicos
```bash
ip.addr == 192.168.1.1
tcp.port == 80
http
dns
ftp
telnet
```

### 🔐 Filtros para credenciales
```bash
ftp.request.command == "USER"
http.authbasic
smtp.req.parameter
pop.request || imap.request
```

### 🧠 Filtros por protocolo
```bash
ssl.handshake
tls.record.version
icmp
arp
udp
tcp.analysis.flags
```

### 🔍 Filtros por comportamiento
```bash
tcp.analysis.retransmission
tcp.flags.syn == 1 && tcp.flags.ack == 0
tcp.window_size < 1000
frame.len > 1000
```

---

## 🛠️ Herramientas complementarias

- `tshark`: versión CLI de Wireshark, ideal para automatizar
```bash
tshark -i eth0 -Y "http.request" -T fields -e http.host -e http.request.uri
```

- `capinfos`: para analizar propiedades de archivos `.pcap`
- `editcap`: para recortar o dividir capturas
- `mergecap`: para combinar múltiples `.pcap` en uno

---

## 💣 Tips ofensivos y de sniffing ninja

### 1. Captura sólo lo necesario
Usa filtros de captura (no solo de display) para evitar toneladas de datos irrelevantes:
```bash
port 80 or port 443
host 10.0.0.1
```

### 2. Caza cookies o tokens
Filtra por:
```bash
http.cookie
http.set_cookie
```

### 3. Extrae archivos o imágenes
Usa la opción: `File > Export Objects > HTTP`

### 4. Reproduce tráfico TCP
Puedes exportar el flujo como texto desde el menú de seguimiento de flujo:
`Follow > TCP Stream`

---

## 🛡️ Consideraciones éticas y legales

⚠️ Solo sniffes redes que:
- Tienes autorización de analizar
- Son parte del entorno controlado del pentest
- No interfieran con usuarios reales

---

## 🚩 Conclusión Interestelar

Wireshark es el visor definitivo para espiar el tráfico de red…  
y en las manos de una hacker como tú, **se convierte en un radar de secretos digitales**. 🛸💜

> ✨ _"Escucha lo que viaja en el aire… los paquetes tienen mucho que contar."_ — **l1ttl3bugc4t**

---
