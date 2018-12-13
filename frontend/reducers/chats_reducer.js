import merge from 'lodash/merge';
import { RECEIVE_CHATS,
         RECEIVE_CHAT,
         REMOVE_CHAT,
         RECEIVE_SELLER } from '../actions/chats_actions';

const _defaultState = {};

const ChatsReducer = (state = _defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CHATS:
      return merge({}, action.chats);
    case (RECEIVE_CHAT):
      return merger({}, _defaultState, { [action.chat.id]: action.chat});
    case (REMOVE_CHAT):
      let newState = merge([], _defaultState);
      delete newState[action.chatId];
      return newState;


    default:
    return state;
  };
};

export default ChatsReducer;
