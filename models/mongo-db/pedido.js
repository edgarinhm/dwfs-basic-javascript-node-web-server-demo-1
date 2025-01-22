const { mongoConnection, mongoObjecId } = require('./connection');

class Pedido {
  static getCollection = async () => {
    return await mongoConnection().collection("pedidos");
  }
  static getObjectId = (id) => {
    return mongoObjecId(id);
  }
}
module.exports = Pedido;