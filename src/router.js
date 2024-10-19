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
      const response = await fetch("https://car-models-api.herokuapp.com/cars"); // Cambia esta URL a la API real que estás utilizando
      const cars = await response.json();
      res.render("pages/carros", { cars }); // Pasa los datos de los carros a la vista
  } catch (error) {
      console.error(error);
      res.status(500).send("Error al obtener los carros.");
  }
});



export default router;
