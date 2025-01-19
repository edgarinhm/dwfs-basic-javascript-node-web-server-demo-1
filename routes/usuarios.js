const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuario');

// Crear usuario
router.post('/', async (req, res) => {
    const { nombre, email } = req.body;
    const usuario = await Usuario.create({ nombre, email });
    res.json(usuario);
});

// Obtener todos los usuarios
router.get('/', async (req, res) => {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
});

// Actualizar usuario
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { nombre, email } = req.body;
    await Usuario.update({ nombre, email }, { where: { id } });
    res.json({ mensaje: 'Usuario actualizado' });
});

// Eliminar usuario
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await Usuario.destroy({ where: { id } });
    res.json({ mensaje: 'Usuario eliminado' });
});

module.exports = router;