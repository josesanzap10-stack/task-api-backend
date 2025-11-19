# DevHub Task API — Backend (Node.js + Express + PostgreSQL + JWT)

Backend REST completo y modular para gestionar tareas con usuarios autenticados.  
Incluye CRUD de tareas, autenticación con JWT, conexión a PostgreSQL y arquitectura preparada para producción.

Este backend forma parte del proyecto **DevHub** y será consumido por un frontend en React.

---

## 🚀 Tech Stack

- **Runtime:** Node.js
- **Framework:** Express
- **Base de datos:** PostgreSQL
- **Auth:** JSON Web Tokens (JWT)
- **Password hashing:** bcrypt
- **Validación:** Joi
- **Dev tools:** Nodemon
- **Arquitectura:** Controllers + Services + Routes + Middlewares

---

## 📂 Estructura del proyecto

```txt
backend/
│── server.js
│── package.json
│── package-lock.json
│── README.md
│
└── src/
    ├── app.js
    ├── config/
    │   ├── appInfo.js
    │   └── db.js
    ├── controllers/
    │   ├── homeController.js
    │   ├── infoController.js
    │   ├── taskController.js
    │   └── authController.js
    ├── routes/
    │   ├── index.js
    │   ├── infoRoutes.js
    │   ├── taskRoutes.js
    │   └── authRoutes.js
    ├── services/
    │   ├── taskService.js
    │   └── authService.js
    ├── middlewares/
    │   ├── authMiddleware.js
    │   ├── errorHandler.js
    │   ├── logger.js
    │   └── notFound.js
    ├── schemas/
    │   └── taskSchema.js
    └── utils/
        └── CustomError.js
