export class ProductRepository {
    constructor({ productModel }) {
        this.productModel = productModel;
    }
    getProducts = async () => {
        return await this.productModel.findAll();
    }
    createProduct = async (product) => {
        return await this.productModel.create(product);
    }
    updateProduct = async (product) => {
        return await this.productModel.update(product, { where: { id: product.id } });
    }
    deleteProduct =  async (id) => {
        return await this.productModel.destroy({ where: { id } });
    }
}