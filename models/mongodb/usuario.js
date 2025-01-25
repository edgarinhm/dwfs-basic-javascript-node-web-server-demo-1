const { mongoConnection, mongoObjecId } = require('./connection');

class Usuario {
  static getCollection = async () => {
    return await mongoConnection().collection("usuarios");
  }
  static getObjectId = (id) => {
    return mongoObjecId(id);
  }
}
module.exports = Usuario;