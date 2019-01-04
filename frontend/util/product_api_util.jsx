export const fetchProducts = (searchTerm) => {
  // debugger
  return $.ajax({
    method: 'GET',
    url: 'api/products',
    data: {
      search_term: searchTerm
    }
  })
};

export const fetchProduct = id => {
  return $.ajax({
    method: 'GET',
    url: `api/products/${id}`
  })
};


export const createProduct = product => {
  return $.ajax({
    method: 'POST',
    url: 'api/products',
    data: { product }
  })
};

export const updateProduct = product => {
  return $.ajax({
    url: `api/products/${product.id}`,
    method: 'PATCH',
    data: { product }
  })
};

export const deleteProduct = id => {
  return $.ajax({
    url: `api/products/${id}`,
    method: 'DELETE'
  })
}
