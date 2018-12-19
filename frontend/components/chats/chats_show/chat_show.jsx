import React from 'react';
import { Link } from 'react-router-dom';

class ChatShow extends React.Component {
  componentDidMount() {
    this.props.fetchChat(this.props.match.params.chatId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.chatId != this.props.match.params.chatId) {
      this.props.fetchChat(this.props.match.params.chatId);
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
        <h3 className="chat-price-show">{chat.body}</h3>
        <img className="chat-show-image" src={chat.image_url}/>
        <h3 className="chat-title-show">{chat.title}</h3>
        <p className="chat-description-show">{chat.description}</p>
        <Link className="back-to-index" to="/chats">Back to Index</Link>
        <Link className="to-chats-show" to="/:seller_id/chats">Is it still available?</Link>
        <Link className="chat-negotiable-show" to="/:seller_id/chats">Price negotiable?</Link>
    </div>
    );
  }
}

export default ProductShow;
