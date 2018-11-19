export const fetchFeedProducts = () => {
  return $.ajax({
    method: 'GET',
    url: `/api/products`
  });
};
