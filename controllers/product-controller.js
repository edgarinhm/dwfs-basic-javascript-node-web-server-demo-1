
export const MakeGetProducts = (ProductRepository) => async () => {
    return await ProductRepository.getProducts();
}

export const MakeCreateProduct = (ProductRepository) => async (Product) => {
    return await ProductRepository.createProduct(Product);
}

export const MakeUpdateProduct = (ProductRepository) => async (Product) => {
    return await ProductRepository.updateProduct(Product);
}

export const MakeDeleteProduct = (ProductRepository) => async (id) => {
    return await ProductRepository.deleteProduct(id);
}