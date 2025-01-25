export class OrderRepository {
    constructor({ orderModel }) {
        this.orderModel = orderModel;
    }
    getOrders = async () => {
        return await this.orderModel.findAll();
    }
    createOrder = async (order) => {
        return await this.orderModel.create(order);
    }
    updateOrder = async (order) => {
        return await this.orderModel.update(order, { where: { id: order.id } });
    }
    deleteOrder = async (id) => {
        return await this.orderModel.destroy({ where: { id } });
    }
}