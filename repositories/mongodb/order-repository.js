export class OrderRepository {
    constructor({ orderModel }) {
        this.orderModel = orderModel;
    }
    getOrders = async () => {
        const  collection = await this.orderModel.getCollection();
        return await collection.find({}).limit(50).toArray();
    }
    createOrder = async (Order) => {
        const  collection = await this.orderModel.getCollection();
        return await collection.insertOne(Order);
    }
    updateOrder = async (Order) => {
        const query = { _id: this.orderModel.getObjectId(id) };
        const updates = {
            $push: { Order: Order }
        };
        const  collection = await this.orderModel.getCollection();
        return await collection.updateOne(query, updates);
    }
    deleteOrder = async (id) => {
        const query = { _id: this.orderModel.getObjectId(id) };
        const  collection = await this.orderModel.getCollection();
        return await collection.deleteOne(query);
    }
}