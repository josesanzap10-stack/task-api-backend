const authService = require("../services/authService");

exports.register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      throw new Error("Todos los campos son obligatorios");
    }

    const user = await authService.register(name, email, password);

    res.status(201).json({
      success: true,
      message: "Usuario registrado correctamente",
      user
    });

  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new Error("Email y password son obligatorios");
    }

    const token = await authService.login(email, password);

    res.json({
      success: true,
      message: "Login exitoso",
      token
    });

  } catch (err) {
    next(err);
  }
};
