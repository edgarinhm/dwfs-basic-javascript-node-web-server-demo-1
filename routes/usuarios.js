const express = require('express');
const router = express.Router();
//const Usuario = require('../models/usuario');
const Usuario = require('../models/mongo-db/usuario');
const { UserRepository } = require('../repositories/mongodb/user-repository');
const { MakeGetUsers, MakeCreateUser, MakeUpdateUser, MakeDeleteUSer } = require('../controllers/user-controller');
const httpStatus = require('../constants/http-constants');

// Crear usuario
router.post('/', async (req, res) => {
    const { nombre, email } = req.body;
    try {
        const userRepository = new UserRepository({ userModel: Usuario});
        const createUser = MakeCreateUser(userRepository);
        const usuario = await createUser({ nombre, email });
        res.json(usuario);
    } catch (error) {
        console.error('error:', error)
        return res.status(error.status || httpStatus.SERVER_ERROR).json(error);
    }
});

// Obtener todos los usuarios
router.get('/', async (req, res) => {
    try {

        const userRepository = new UserRepository({ userModel: Usuario});
        const getUsers = MakeGetUsers(userRepository);
        const usuarios = await getUsers();
        res.json(usuarios);
    } catch (error) {
        console.error('getUsers-error:', error);
        return res.status(error.status || httpStatus.SERVER_ERROR).json(error);
    }
});

// // Actualizar usuario
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { nombre, email } = req.body;
    try {
        const userRepository = new UserRepository({ userModel: Usuario});
        const updateUser = MakeUpdateUser(userRepository);
        await updateUser({ id, nombre, email });
        res.json({ mensaje: 'Usuario actualizado' });
    } catch (error) {
        return res.status(error.status || httpStatus.SERVER_ERROR).json(error);
    }
});

// // Eliminar usuario
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const userRepository = new UserRepository({ userModel: Usuario});
        const deleteUser = MakeDeleteUSer(userRepository);
        await deleteUser(id);
        res.json({ mensaje: 'Usuario eliminado' });
    } catch (error) {
        return res.status(error.status || httpStatus.SERVER_ERROR).json(error);
    }
});

module.exports = router;