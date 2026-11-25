# Plataforma de Eventos

Temática: plataforma para una veterinaria, donde los dueños de mascotas pueden reservar turnos de atención (baño, corte, vacunas, consultas) según el cupo disponible, y consultar el historial de servicios realizados a su mascota.

## Tecnologías
Node.js, Express, MongoDB (Mongoose), dotenv, ESM, bcrypt, validator

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
│   ├── services/
│   │   ├── events.service.js
│   │   ├── sessions.service.js
│   │   └── users.service.js
│   └── utils/
│       ├── bcrypt.js               # hashPassword
│       └── createdError.js         # createdError(message, status)
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
| password | String | obligatorio, se guarda hasheada con bcrypt |
| role | String | `user`, `organizer` o `admin`, por defecto `user` |

## Manejo de errores
El middleware `errorHandler` (`src/middlewares/middleware.js`) captura los errores de las rutas y responde en JSON con el status correspondiente.

Para lanzar errores con status propio se usa el helper `createdError(message, status)` (`src/utils/createdError.js`), que crea un `Error` con la propiedad `.status`.

## Rutas disponibles
- `GET /api/health`: estado del servidor
- `GET /api/events`: lista de eventos
- `POST /api/sessions/register`: registro seguro de usuarios
- `GET /api/users`: lista de usuarios

## Registro seguro de usuarios (Pre-entrega 2)

**Endpoint:** `POST /api/sessions/register`

### Dependencias agregadas
- `bcrypt`
- `validator`

### Pruebas realizadas en Postman (puerto 8080)
- Registro exitoso: 201, email normalizado, role `"user"`, sin `password` en la respuesta.
- Email duplicado (con mayúsculas y espacios): 409.
- Role enviado en el body: ignorado.
- Campos faltantes, email inválido y contraseña corta: 400.
- Contraseña hasheada en MongoDB (`$2b$...`).