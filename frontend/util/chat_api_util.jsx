export const fetchChats = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/chats'
  })
};

export const fetchChat = id => {
  return $.ajax({
    method: 'GET',
    url: `api/chats/${id}`
  })
};


export const createChat = chat => {
  return $.ajax({
    method: 'POST',
    url: 'api/products',
    data: chatForm
  })
};

export const updateChat = chat => {
  return $.ajax({
    url: `api/chats/${chat.id}`,
    method: 'PATCH',
    data: { chat }
  })
};

export const deleteChat = id => {
  return $.ajax({
    url: `api/chats/${id}`,
    method: 'DELETE'
  })
}
