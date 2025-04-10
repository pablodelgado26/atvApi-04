import express from "express";
import cursoController from "../controllers/cursoController.js";
const router = express.Router();
router.get("/", cursoController.getAll);
router.post("/", cursoController.create);
router.put("/:id", cursoController.update);
router.delete("/:id", cursoController.delete);
export default router;
