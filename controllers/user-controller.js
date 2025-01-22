
export const MakeGetUsers = (userRepository) => async () => {
    return await userRepository.getUsers();
}

export const MakeCreateUser = (userRepository) => async (user) => {
    return await userRepository.createUser(user);
}

export const MakeUpdateUser = (userRepository) => async (user) => {
    return await userRepository.updateUser(user);
}

export const MakeDeleteUSer = (userRepository) => async (id) => {
    return await userRepository.deleteUser(id);
}