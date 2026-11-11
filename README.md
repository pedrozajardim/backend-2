# Plataforma de Eventos

Temática: plataforma de meetups para una comunidad de programadores, donde los usuarios pueden inscribirse a eventos según el cupo disponible.

## Tecnologías
Node.js, Express, dotenv, ESM

## Instalación
npm install

## Variables de entorno
Copia `.env.example` a `.env` y completa los valores:
PORT, NODE_ENV, MONGO_URL, JWT_SECRET

## Cómo ejecutar
npm run dev
npm start

## Estructura de carpetas
```
proyecto-backend2/
├── src/
│   ├── app.js                  # configura Express
│   ├── server.js               # levanta el servidor
│   ├── config/
│   │   └── env.config.js
│   ├── controllers/
│   │   ├── events.controller.js
│   │   └── sessions.controller.js
│   ├── dao/
│   │   └── .gitkeep
│   ├── middlewares/
│   │   └── .gitkeep
│   ├── models/
│   │   ├── Event.js
│   │   └── User.js
│   ├── repositories/
│   │   └── .gitkeep
│   ├── routes/
│   │   ├── events.router.js
│   │   └── sessions.router.js
│   ├── services/
│   │   └── .gitkeep
│   └── utils/
│       └── .gitkeep
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

## Rutas disponibles
- GET /api/health
- GET /api/events
- GET /api/sessions