export class UserRepository {
    constructor({ userModel }) {
        this.userModel = userModel;
    }
    getUsers = async () => {
        const  collection = await this.userModel.getCollection();
        return await collection.find({}).limit(50).toArray();
    }
    createUser = async (user) => {
        const  collection = await this.userModel.getCollection();
        return await collection.insertOne(user);
    }
    updateUser = async (user) => {
        const query = { _id: this.userModel.getObjectId(id) };
        const updates = {
            $push: { user: user }
        };
        const  collection = await this.userModel.getCollection();
        return await collection.updateOne(query, updates);
    }
    deleteUser = async (id) => {
        const query = { _id: this.userModel.getObjectId(id) };
        const  collection = await this.userModel.getCollection();
        return await collection.deleteOne(query);
    }
}