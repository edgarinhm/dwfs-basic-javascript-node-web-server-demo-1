const express = require('express');
const router = express.Router();
const { MakeGetProducts, MakeCreateProduct, MakeUpdateProduct, MakeDeleteProduct } = require('../controllers/product-controller');
const httpStatus = require('../constants/http-constants');

const createRouter = ({ Producto, ProductRepository }) => {
    // Crear producto
    router.post('/', async (req, res) => {
        const { nombre, precio } = req.body;
        try {
            const productRepository = new ProductRepository({ productModel: Producto });
            const createProduct = MakeCreateProduct(productRepository);
            const producto = await createProduct({ nombre, precio });
            res.json(producto);
        } catch (error) {
            return res.status(error.status || httpStatus.SERVER_ERROR).json(error);
        }
    });

    // Obtener todos los productos
    router.get('/', async (req, res) => {
        try {
            const productRepository = new ProductRepository({ productModel: Producto });
            const getProducts = MakeGetProducts(productRepository);
            const productos = await getProducts();
            res.json(productos);
        } catch (error) {
            return res.status(error.status || httpStatus.SERVER_ERROR).json(error);
        }
    });

    // Actualizar producto
    router.put('/:id', async (req, res) => {
        const { id } = req.params;
        const { nombre, precio } = req.body;
        try {
            const productRepository = new ProductRepository({ productModel: Producto });
            const updateProduct = MakeUpdateProduct(productRepository);
            await updateProduct({ id, nombre, precio });
            res.json({ mensaje: 'Producto actualizado' });
        } catch (error) {
            return res.status(error.status || httpStatus.SERVER_ERROR).json(error);
        }
    });

    // Eliminar producto
    router.delete('/:id', async (req, res) => {
        const { id } = req.params;
        try {
            const productRepository = new ProductRepository({ productModel: Producto });
            const deleteProduct = MakeDeleteProduct(productRepository);
            await deleteProduct(id);
            res.json({ mensaje: 'Producto eliminado' });
        } catch (error) {
            return res.status(error.status || httpStatus.SERVER_ERROR).json(error);
        }
    });
    return router;
}


module.exports = createRouter;
