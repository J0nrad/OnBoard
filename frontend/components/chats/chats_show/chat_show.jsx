import React from 'react';
import { Link } from 'react-router-dom';

class ChatShow extends React.Component {
  componentDidMount() {
    
    this.props.fetchChat(this.props.match.params.chatsId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.chatId != this.props.match.params.chatsId) {
      this.props.fetchChat(this.props.match.params.chatsId);
    }
  }

  render() {
    const { chat } = this.props;
    if (!chat) {
      return (
        <div>
          Loading...
        </div>
      )
    }

    return (
      <div className="chat-show_wrapper">
        <h3 className="chat-price-show">{chat.id}</h3>
        <Link className="back-to-index" to="/chats">Back to Index</Link>
        <Link className="to-chats-show" to="/:seller_id/chats">Is it still available?</Link>
        <Link className="chat-negotiable-show" to="/:seller_id/chats">Price negotiable?</Link>
    </div>
    );
  }
}

export default ChatShow;
