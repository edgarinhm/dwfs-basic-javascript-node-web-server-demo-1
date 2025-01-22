
export const MakeGetOrders = (OrderRepository) => async () => {
    return await OrderRepository.getOrders();
}

export const MakeCreateOrder = (OrderRepository) => async (Order) => {
    return await OrderRepository.createOrder(Order);
}

export const MakeUpdateOrder = (OrderRepository) => async (Order) => {
    return await OrderRepository.updateOrder(Order);
}

export const MakeDeleteOrder = (OrderRepository) => async (id) => {
    return await OrderRepository.deleteOrder(id);
}