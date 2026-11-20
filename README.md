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
│   │   ├── sessions.controller.js
│   │   └── users.controller.js
│   ├── dao/
│   │   ├── events.dao.js
│   │   └── users.dao.js
│   ├── middlewares/
│   │   └── middleware.js           # errorHandler
│   ├── models/
│   │   ├── Event.js
│   │   └── User.js
│   ├── repositories/
│   │   ├── events.repository.js
│   │   └── users.repository.js
│   ├── routes/
│   │   ├── events.router.js
│   │   ├── sessions.router.js
│   │   └── users.router.js
│   └── services/
│       ├── events.service.js
│       └── users.service.js
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

## Modelo de usuario
| Campo | Tipo | Detalle |
|---|---|---|
| first_name | String | obligatorio |
| last_name | String | obligatorio |
| email | String | obligatorio, único |
| role | String | `user` o `admin`, por defecto `user` |

## Manejo de errores
El middleware `errorHandler` (`src/middlewares/middleware.js`) captura los errores de las rutas y responde en JSON con el status correspondiente.

## Rutas disponibles
- `GET /api/health`: estado del servidor
- `GET /api/events`: lista de eventos
- `GET /api/sessions`: estructura inicial de sesiones
- `GET /api/users`: lista de usuarios