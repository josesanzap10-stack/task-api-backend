const express = require("express");
const router = express.Router();

const taskController = require("../controllers/taskController");
const authMiddleware = require("../middlewares/authMiddleware");

// Todas las rutas de tasks requieren token
router.use(authMiddleware);

router.get("/", taskController.getAll);
router.post("/", taskController.create);
router.patch("/:id", taskController.update);
router.delete("/:id", taskController.remove);

module.exports = router;
