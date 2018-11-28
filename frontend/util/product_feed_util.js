export const fetchProductsFeed = () => {
  return $.ajax({
    method: 'GET',
    url: `/api/products`
  });
};
