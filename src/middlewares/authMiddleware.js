const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      success: false,
      message: "Token no proporcionado",
    });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, "super-secret-key");
    req.user = decoded; // userId, email
    next();
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: "Token inválido o expirado",
    });
  }
};
