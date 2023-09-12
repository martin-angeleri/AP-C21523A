// Se implementa el enrutador de Express
// const router = require('express').Router();

const { Router } = require('express');
const router = Router()
const {
    actualizarPublicacion,
    crearPublicacion,
    eliminarPublicacion,
    obtenerPublicaciones,
    obtenerPublicacion
} = require('../controllers/blog.controllers');


// ==================================================
//         Rutas para renderizar vistas
// ==================================================

router.get('/', (req, res) => {
    res.render('home')
})

// Ruta para devolver la vista admin
router.get('/admin', (req, res)=> {
    res.render('admin')
})

// Ruta para devolver la vista admin
router.get('/admin/:id', (req, res)=> {
    res.render('editar', { id: req.params.id })
})





// ==================================================
//         Rutas para CRUD de Publicaciones
// ==================================================

// Crear nueva publicación
router.post('/publicacion', crearPublicacion);

// Obtener todas las publicaciones
router.get('/publicaciones', obtenerPublicaciones);

// Obtener una publicación
router.get('/publicacion/:id', obtenerPublicacion)

// Actualizar una publicación
router.put('/publicacion/:id', actualizarPublicacion);

// Eliminar una publicación
router.delete('/publicacion/:id', eliminarPublicacion);

module.exports = router;