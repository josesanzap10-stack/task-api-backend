const pool = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (name, email, password) => {
  // Verificar si el email ya existe
  const checkUser = await pool.query("SELECT * FROM users WHERE email = $1", [
    email,
  ]);

  if (checkUser.rows.length > 0) {
    throw new Error("El email ya está registrado");
  }

  // Encriptar contraseña
  const hashedPassword = await bcrypt.hash(password, 10);

  // Insertar el usuario
  const result = await pool.query(
    `INSERT INTO users (name, email, password)
     VALUES ($1, $2, $3)
     RETURNING id, name, email, created_at`,
    [name, email, hashedPassword]
  );

  return result.rows[0];
};

exports.login = async (email, password) => {
  // Buscar el usuario
  const result = await pool.query("SELECT * FROM users WHERE email = $1", [
    email,
  ]);

  if (result.rows.length === 0) {
    throw new Error("Usuario no encontrado");
  }

  const user = result.rows[0];

  // Comparar contraseñas
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Contraseña incorrecta");
  }

  // Crear token
  const token = jwt.sign(
    { userId: user.id, email: user.email },
    "super-secret-key",
    { expiresIn: "1h" }
  );

  return token;
};
