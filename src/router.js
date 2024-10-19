import express from "express";
import {
   listarEstudiantes,
 } from "./estudianteController.js";

const router = express.Router();

// Ruta para listar estudiantes usando el motor de plantillas
router.get("/Crud-Completo-con-NodeJS-Express-y-MySQL", async (req, res) => {
  try {
    const estudiantes = await listarEstudiantes();
    res.render("pages/estudiantes", { estudiantes });
  } catch (error) {
    const { status, message } = error;
    res.status(status || 500).json({ error: message });
  }
});

router.get("/acerca", (req, res) => {
  res.render("pages/acerca"); 
});


export default router;
