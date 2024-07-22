# Proyecto Fullstack con NestJS y Vite + React

Este proyecto es una aplicación fullstack que utiliza NestJS para el backend y Vite con React para el frontend. El proyecto está diseñado para proporcionar una experiencia de desarrollo rápida y eficiente, utilizando tecnologías modernas de desarrollo web.

## Estructura del Proyecto


## Requisitos

- Node.js (versión recomendada: 16.x o superior)
- npm o yarn

## Configuración del Proyecto

### Backend (NestJS)

1. **Instalar dependencias**:
    ```sh
    cd backend
    npm install
    ```

2. **Configurar variables de entorno**:
    Crea un archivo `.env` en el directorio `backend` y añade las variables de entorno necesarias. Por ejemplo:
    ```env
    DATABASE_URI=mongodb://localhost:27017/tu_base_de_datos
    JWT_SECRET=tu_secreto
    ```

3. **Iniciar el servidor**:
    ```sh
    npm run start:dev
    ```
    El servidor se ejecutará en `http://localhost:3000`.

### Frontend (Vite + React)

1. **Instalar dependencias**:
    ```sh
    cd frontend
    npm install
    ```

2. **Configurar variables de entorno**:
    Crea un archivo `.env` en el directorio `frontend` y añade las variables de entorno necesarias. Por ejemplo:
    ```env
    VITE_API_URL=http://localhost:3000
    ```

3. **Iniciar la aplicación**:
    ```sh
    npm run dev
    ```
    La aplicación se ejecutará en `http://localhost:5173`.

## Scripts Disponibles

### Backend

- `npm run start`: Inicia el servidor en modo producción.
- `npm run start:dev`: Inicia el servidor en modo desarrollo con recarga automática.
- `npm run test`: Ejecuta los tests.

### Frontend

- `npm run dev`: Inicia la aplicación en modo desarrollo con recarga automática.
- `npm run build`: Construye la aplicación para producción.
- `npm run serve`: Sirve la aplicación construida.

## Estructura del Código

### Backend (NestJS)

La estructura del código del backend sigue las convenciones de NestJS:

backend/
├── src/
│ ├── app.controller.ts
│ ├── app.module.ts
│ ├── app.service.ts
│ ├── main.ts
│ └── ... (otros módulos, controladores y servicios)
└── ...


### Frontend (Vite + React)

La estructura del código del frontend sigue las convenciones de Vite y React:

frontend/
├── src/
│ ├── assets/
│ ├── components/
│ ├── pages/
│ ├── App.tsx
│ ├── main.tsx
│ └── ... (otros componentes y páginas)
└── ...


## Contribuir

Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

1. Haz un fork del proyecto.
2. Crea una rama nueva (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -am 'Añadir nueva funcionalidad'`).
4. Haz push a la rama (`git push origin feature/nueva-funcionalidad`).
5. Crea un nuevo Pull Request.
.

