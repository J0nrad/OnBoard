export const allProducts = (products) => {
  return Object.values(products)
};

export const categorizedProducts = (category, products) => {
  return Object.values(products).filter(product => {
    return product.category === category;
  });
};

export const usersChats = (chats) => {
  return Object.values(chats)
};
