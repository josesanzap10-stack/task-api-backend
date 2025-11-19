// Middleware para validar datos mediante un esquema
module.exports = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return next({
        status: 400,
        message: error.details[0].message
      });
    }
    next();
  };
};
