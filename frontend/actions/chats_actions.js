import * as ChatApiUtil from '../util/chat_api_util';

export const RECEIVE_CHATS = 'RECEIVE_CHATS';
export const RECEIVE_CHAT = 'RECEIVE_CHAT';
export const CREATE_CHAT = 'CREATE_CHAT';
export const REMOVE_CHAT = 'REMOVE_CHAT';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';


export const receiveChats = chats => ({
  type: RECEIVE_CHATS,
  chats: chats
});

export const receiveChat = chat => ({
  type: RECEIVE_CHAT,
  chat: chat
});


export const removeChat = chat => ({
  type: REMOVE_CHAT,
  chatId
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});


export const fetchChats = () => dispatch => {
  return ChatApiUtil.fetchChats().then(chats => {
    return dispatch(receiveChats(chats))
  }, err => {
      return dispatch(receiveErrors(err.responseJSON));
  });
};

export const fetchChat = (id) => dispatch => {
  return ChatApiUtil.fetchChat(id).then(currentChat => {
    return dispatch(receiveChat(currentChat))
  }, err => {
      return dispatch(receiveErrors(err.responseJSON));
  });
};

export const createChat = chat => dispatch => {
  return ChatApiUtil.createChat(chat).then(currentChat => {
    return dispatch(receiveChat(currentChat))
  }, err => {
      return dispatch(receiveErrors(err.responseJSON));
  });
};

export const deleteChat = chatId => dispatch => {
  return ChatApiUtil.deleteChat(chatId).then(chat => {
    return dispatch(removeChat(chatId))
  }, err => {
      return dispatch(receiveErrors(err.responseJSON));
  });
};

export const updateChat = (chat) => dispatch => {
  return ChatApiUtil.updateChat(product).then(currentChat => {
    return dispatch(receiveChat(currentChat))
  }, err => {
      return dispatch(receiveErrors(err.responseJSON));
  });
};
