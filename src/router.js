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

router.get("/rick-and-morty", (req, res) => {
  res.render("pages/rick-and-morty"); 
});

router.get("/carros", async (req, res) => {
  try {
      const response = await fetch("https://api.unsplash.com/photos?client_id=q7CUYyOpBORXxFbreu90jJSLxOYrQqZPxjj8gvVOWAw"); // Reemplaza YOUR_ACCESS_KEY con tu clave de acceso de Unsplash
      const images = await response.json();
      res.render("pages/carros", { images }); // Pasa los datos de las imágenes a la vista
  } catch (error) {
      console.error(error);
      res.status(500).send("Error al obtener las imágenes.");
  }
});



export default router;
