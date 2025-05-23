---
layout: post
title: "Redes Informáticas 101"
date: 2025-05-05 00:00:00 
categories: [ciberseguridad, redes, cuaderno]
tags: [redes, fundamentos, networking, l1ttl3bugc4t]
---

# 🌐 Redes Informáticas 101  
### La columna vertebral del internet... y de todo lo que hackeamos éticamente 🕶️

Una red informática es más que solo Wi-Fi y cables enredados.  
Formalmente, se define como:

> ⚙️ *Conjunto de dispositivos electrónicos (equipos de cómputo) interconectados entre sí mediante vías de transmisión, capaces de procesar, generar, almacenar, distribuir y compartir datos y recursos, con la finalidad de llevar a cabo la transferencia de información de manera segura, eficiente y confiable.*

---

## 📜 Un poco de historia

Aunque hoy todo nos suena a Wi-Fi y fibra óptica, **el origen de las redes de comunicación modernas se remonta al telégrafo**.  
Fue el primer sistema que permitió enviar mensajes a larga distancia de forma casi instantánea, conectando ciudades y luego países con líneas físicas.  
👉 Ese fue el primer "cableado" real que unió al mundo digital antes de que existiera siquiera el concepto de internet.

---

## 🛰️ Tipos de redes informáticas

| Tipo | Significado | Cobertura |
|------|-------------|-----------|
| **PAN** | *Personal Area Network* | Muy pequeña, alrededor de una persona (ej. Bluetooth, smartwatch, audífonos inalámbricos) |
| **LAN** | *Local Area Network* | Casas, oficinas, escuelas pequeñas |
| **CAN** | *Campus Area Network* | Universidades, campus empresariales |
| **MAN** | *Metropolitan Area Network* | Zonas urbanas o ciudades completas |
| **WAN** | *Wide Area Network* | Países, continentes; abarca múltiples redes LAN/MAN |
| **GAN** | *Global Area Network* | Abarca el mundo entero. El mejor ejemplo: **internet** |

> 🧠 *Dato curioso: tu teléfono con audífonos Bluetooth ya está usando una PAN.*

---

## 🧭 Topologías de red

La **topología** describe cómo están físicamente conectados los dispositivos en una red. Influye directamente en el rendimiento, la seguridad y la tolerancia a fallos.

### ⭐ Estrella  
Todos los dispositivos se conectan a un **nodo central** (como un switch o router).  
- ✅ Fácil de gestionar  
- ❌ Si el nodo central cae, la red también

### 🔁 Anillo  
Cada dispositivo se conecta al siguiente formando un **círculo cerrado**.  
- 🔄 Datos circulan en un solo sentido  
- ❌ Una falla puede afectar a todos (a menos que haya redundancia)

### ➖ Bus  
Todos los dispositivos comparten un **único canal de comunicación**.  
- ✅ Económica  
- ❌ Poco escalable y sensible a fallos

### 🕸️ Malla  
Cada dispositivo se conecta con varios otros directamente.  
- ✅ Altísima redundancia  
- ❌ Costosa y compleja de mantener

### 🔀 Híbrida  
Combinación de topologías según necesidades.  
- ✅ Flexible  
- ❌ Puede volverse compleja

---

## 🔄 ¿Qué es una VLAN?

Una **VLAN** (*Virtual LAN*) es una red lógica dentro de una red física.  
Permite agrupar dispositivos aunque no estén físicamente conectados entre sí.  
Sirve para segmentar, aislar tráfico y aumentar la seguridad sin añadir cables.

---

## 🧩 Componentes de una red

- 🔌 **Dispositivos de red:** routers, switches, hubs  
- 💻 **Dispositivos finales:** computadoras, móviles, impresoras  
- 📡 **Medios de transmisión:** cobre, fibra óptica, ondas de radio  
- 📜 **Protocolos:** TCP/IP, HTTP, DNS, DHCP, etc.

Además, las redes permiten compartir **datos, video, audio, texto, memoria y procesamiento** entre dispositivos conectados.

---

## ✅ Ventajas

- Comunicación en tiempo real  
- Compartición de recursos (impresoras, internet, procesamiento)  
- Gestión y administración centralizada  
- Seguridad en la transmisión de datos

---

## ⚠️ Desventajas

- Costos de implementación y mantenimiento  
- Necesidad de personal capacitado  
- Vulnerabilidad a ataques  
- Dependencia de la disponibilidad de la red

---

## 💡 Reflexión final

Toda la magia de internet, el hacking ético, los videojuegos online y los servicios cloud **ocurren gracias a las redes**.  
Entender cómo se estructuran y funcionan es uno de los primeros superpoderes que todo hacker —del lado bueno o malo— necesita dominar.

> 🕹️ Aprende redes, y aprenderás a ver el mundo digital como un mapa lleno de puertas, túneles y secretos.
