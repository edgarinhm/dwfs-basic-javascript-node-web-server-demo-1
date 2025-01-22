const { mongoConnection, mongoObjecId } = require('./connection');

class Producto {
  static getCollection = async () => {
    return await mongoConnection().collection("productos");
  }
  static getObjectId = (id) => {
    return mongoObjecId(id);
  }
}
module.exports = Producto;