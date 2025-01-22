export class ProductRepository {
    constructor({ productModel }) {
        this.productModel = productModel;
    }
    getProducts = async () => {
        const  collection = await this.productModel.getCollection();
        return await collection.find({}).limit(50).toArray();
    }
    createProduct = async (product) => {
        const  collection = await this.productModel.getCollection();
        return await collection.insertOne(product);
    }
    updateProduct = async (product) => {
        const query = { _id: this.productModel.getObjectId(id) };
        const updates = {
            $push: { product: product }
        };
        const  collection = await this.productModel.getCollection();
        return await collection.updateOne(query, updates);
    }
    deleteProduct = async (id) => {
        const query = { _id: this.productModel.getObjectId(id) };
        const  collection = await this.productModel.getCollection();
        return await collection.deleteOne(query);
    }
}