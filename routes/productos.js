const express = require('express');
const router = express.Router();
const Producto = require('../models/producto');

// Crear producto
router.post('/', async (req, res) => {
    const { nombre, precio } = req.body;
    const producto = await Producto.create({ nombre, precio });
    res.json(producto);
});

// Obtener todos los productos
router.get('/', async (req, res) => {
    const productos = await Producto.findAll();
    res.json(productos);
});

// Actualizar producto
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { nombre, precio } = req.body;
    await Producto.update({ nombre, precio }, { where: { id } });
    res.json({ mensaje: 'Producto actualizado' });
});

// Eliminar producto
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await Producto.destroy({ where: { id } });
    res.json({ mensaje: 'Producto eliminado' });
});

module.exports = router;
