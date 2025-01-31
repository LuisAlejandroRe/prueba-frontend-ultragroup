# 🏨 Plataforma de manejo de hoteles

🚀 Permite a agentes de viaje gestionar hoteles y habitaciones, mientras que los viajeros pueden realizar reservaciones filtrando por fechas, número de pasajeros y destino.

## 📌 **Índice**

- [📖 Descripción](#-descripción)
- [🛠️ Tecnologías Usadas](#-tecnologías-usadas)
- [🗂️ Arquitectura y Patrones](#-arquitectura-y-patrones)
- [⚙️ Funcionalidades](#-funcionalidades)
- [🚀 CI/CD con GitHub Actions y S3](#-cicd-con-github-actions-y-s3)
- [🛠️ Instalación y Uso](#-instalación-y-uso)
- [📜 Licencia](#-licencia)

---

## 📖 **Descripción**

Este proyecto es una aplicación web desarrollada con **React y TypeScript** que sigue el patrón **MVVM (Model-View-ViewModel)** y aprovecha la **inyección de dependencias** para manejar servicios.

Los **agentes de viaje** pueden administrar hoteles y habitaciones, mientras que los **viajeros** pueden buscar y reservar alojamiento según sus necesidades.

---

## 🛠️ **Tecnologías Usadas**

| Tecnología         | Uso                                    |
| ------------------ | -------------------------------------- |
| **React**          | Framework para la UI                   |
| **TypeScript**     | Tipado estático y robustez del código  |
| **Formik + Yup**   | Manejo de formularios y validaciones   |
| **Tailwind CSS**   | Estilizado ágil y responsive           |
| **Firebase**       | Base de datos, BaaS y uso mediante SDK |
| **AWS S3**         | Almacenamiento y despliegue estático   |
| **GitHub Actions** | Automatización de despliegue (CI/CD)   |

---

## 🗂️ **Arquitectura y Patrones**

📌 **MVVM (Model-View-ViewModel)**

- **Model**: Gestiona los datos y la lógica de negocio.
- **ViewModel**: Maneja la lógica de UI y el estado del formulario con Formik.
- **View**: Componentes de React que renderizan la UI.

📌 **Inyección de Dependencias**

- Permite manejar servicios como `HotelService` de forma desacoplada.

📌 **Optimización con `useTransition`**

- Mejora la experiencia de búsqueda de ciudades sin bloquear la UI.

---

## ⚙️ **Funcionalidades**

### 🏨 **Como Agente de Viaje**

✅ Crear hoteles y habitaciones.  
✅ Deshabilitar hoteles y habitaciones.  
✅ Listar todas las reservaciones.

### 🧳 **Como Viajero**

✅ Buscar hoteles filtrando por:

- Fechas de entrada y salida.
- Número de pasajeros.
- Ciudad de destino.  
  ✅ Realizar reservas con información de pasajeros.

---

## 🚀 **CI/CD con GitHub Actions y S3**

🔹 Se usa **GitHub Actions** para automatizar el despliegue en **AWS S3**.

📌 **Pipeline de CI/CD incluye:**

1. Construcción del proyecto (`yarn build`).
2. Subir los archivos a un **bucket S3** para hosting estático.

🌍 **Accede a la plataforma aquí:** [Enlace de despliegue en S3](http://prueba-frontend-ultragroup.bucket.s3-website-us-east-1.amazonaws.com/)

---

## 🛠️ **Instalación y Uso**

```bash
# Clonar el repositorio
git clone https://github.com/LuisAlejandroRe/prueba-frontend-ultragroup.git
cd prueba-frontend-ultragroup

# Instalar dependencias
yarn

# Ejecutar en desarrollo
yarn dev

# Construir para producción
yarn build
```
