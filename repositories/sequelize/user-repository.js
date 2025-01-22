export class UserRepository {
    constructor({ userModel }) {
        this.userModel = userModel;
    }
    getUsers = async () => {
        return await this.userModel.findAll();
    }
    createUser = async (user) => {
        return await this.userModel.create(user);
    }
    updateUser = async (user) => {
        return await this.userModel.update(user, { where: { id: user.id } });
    }
    deleteUser =  async (id) => {
        return await this.userModel.destroy({ where: { id } });
    }
}