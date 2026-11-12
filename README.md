# Plataforma de Eventos

Temática: plataforma de meetups para una comunidad de programadores, donde los usuarios pueden inscribirse a eventos según el cupo disponible.

## Tecnologías
Node.js, Express, MongoDB (Mongoose), dotenv, ESM

## Instalación
```bash
npm install
```

## Variables de entorno
Copia `.env.example` a `.env` y completa los valores:
```
PORT
NODE_ENV
MONGO_URL
JWT_SECRET
```

## Cómo ejecutar
```bash
npm run dev   # modo desarrollo
npm start     # modo producción
```

## Estructura de carpetas
```
proyecto-backend2/
├── src/
│   ├── app.js                      # configura Express
│   ├── server.js                   # levanta el servidor
│   ├── config/
│   │   ├── env.config.js
│   │   └── db.config.js
│   ├── controllers/
│   │   ├── events.controller.js
│   │   └── sessions.controller.js
│   ├── dao/
│   │   └── events.dao.js
│   ├── middlewares/
│   │   └── .gitkeep
│   ├── models/
│   │   ├── Event.js
│   │   └── User.js
│   ├── repositories/
│   │   └── events.repository.js
│   ├── routes/
│   │   ├── events.router.js
│   │   └── sessions.router.js
│   ├── services/
│   │   └── events.service.js
│   └── utils/
│       └── .gitkeep
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

## Rutas disponibles
- `GET /api/health`: estado del servidor
- `GET /api/events`: lista de eventos
- `GET /api/sessions`: estructura inicial de sesiones