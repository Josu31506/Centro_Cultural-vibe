# Centro Cultural Amador Ballumbrosio - Frontend

Interfaz web creada con Vite + React + TypeScript para presentar eventos culturales del Centro Cultural Amador Ballumbrosio. El diseño se inspira en la paleta y composición de las pantallas de referencia y ahora consume el backend disponible en `http://localhost:8080`.

## Características

- ⚡️ Vite + React 18 + TypeScript
- 🎨 Tailwind CSS con paleta personalizada (tonos arena, caramelo y cacao)
- 🧭 React Router DOM con páginas de inicio, detalle de evento, autenticación, confirmación y QR
- 🌐 Integración con endpoints reales para listar eventos, registrarse, iniciar sesión y realizar inscripciones
- 🔐 Contexto de autenticación con persistencia de sesión y manejo de tokens JWT
- 🧩 Arquitectura organizada en carpetas para componentes, hooks, servicios, axios y rutas
- 🪄 Componentes reutilizables y hook de conteo regresivo para los eventos

## Scripts

```bash
npm install        # Instala dependencias
npm run dev        # Inicia el servidor de desarrollo en http://localhost:5173
npm run build      # Genera la build de producción
npm run preview    # Previsualiza la build
```

> **Nota:** Durante la ejecución de `npm install` puede requerirse acceso a internet para descargar dependencias desde npm.

## Estructura de carpetas

```
├── src
│   ├── assets        # Recursos estáticos (logo)
│   ├── axios         # Configuración de Axios
│   ├── components    # Componentes reutilizables
│   ├── hooks         # Hooks personalizados (AuthProvider, countdown, etc.)
│   ├── pages         # Páginas de la aplicación
│   ├── routes        # Definición de rutas
│   ├── services      # Servicios para consumir el backend
│   └── types         # Tipos compartidos (eventos, usuario)
```

## Configuración de entorno

El proyecto espera la variable `VITE_API_URL` para definir la URL del backend. Por defecto apunta a `http://localhost:8080`.

```bash
cp .env.example .env         # Crea el archivo de variables de entorno (opcional)
```

## Flujo principal

1. Regístrate desde la vista de registro (`/registrarse`). Al finalizar se guardará el token JWT y se recargará el perfil.
2. Inicia sesión con tus credenciales desde `/iniciar-sesion` en caso de tener cuenta previa.
3. Explora los eventos desde la página principal y selecciona uno para ver el detalle.
4. Desde el detalle del evento confirma tu inscripción; el flujo redirige a una pantalla de confirmación y a la página de QR.

> Los endpoints consumidos están descritos en la colección de Postman compartida por el backend (`/api/auth/*`, `/api/user/me`, `/api/event/*`).
