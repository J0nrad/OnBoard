export const fetchProducts = data => {
  return $.ajax({
    method: 'GET',
    url: 'api/products',
    data
  })
};;

export const fetchProduct = id => {
  return $.ajax({
    method: 'GET',
    url: `api/products/${id}`
  })
};


export const createProduct = benchForm => {
  return $.ajax({
    method: 'POST',
    url: 'api/products',
    data: productForm
  })
};;

export const updateProduct = product => {
  return $.ajax({
    url: `api/products/${product.id}`,
    method: 'PATCH',
    data: { product }
  })
);

export const deleteProduct = id => {
  return $.ajax({
    url: `api/products/${id}`,
    method: 'DELETE'
  })
}
