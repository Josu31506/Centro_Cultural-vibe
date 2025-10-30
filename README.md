# Centro Cultural Amador Ballumbrosio - Frontend

Interfaz web creada con Vite + React + TypeScript para presentar eventos culturales del Centro Cultural Amador Ballumbrosio. El diseño se inspira en la paleta y composición de las pantallas de referencia y prepara la base para una futura integración con backend.

## Características

- ⚡️ Vite + React 18 + TypeScript
- 🎨 Tailwind CSS con paleta personalizada (tonos arena, caramelo y cacao)
- 🧭 React Router DOM con páginas de inicio, detalle de evento, autenticación, confirmación y QR
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
│   ├── hooks         # Hooks personalizados
│   ├── pages         # Páginas de la aplicación
│   ├── routes        # Definición de rutas
│   ├── services      # Servicios (peticiones/mock)
│   └── types         # Tipos y datos mock
```

## Próximos pasos

- Integrar los formularios con el backend para autenticación y registro.
- Consumir eventos reales a través de los servicios y Axios.
- Añadir manejo de estado para inscripciones y usuarios.
