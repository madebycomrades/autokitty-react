import React, {Component, PropTypes} from 'react';
import Message from '../message/Message';

export default class MessageList extends Component {

  static propTypes = {
    messages: PropTypes.array.isRequired,
    removeMessage: PropTypes.func.isRequired
  };

  onDismissClick (id, e) {
    e.preventDefault();
    this.props.removeMessage(id);
  }

  render () {
    const {messages} = this.props;
    const style = {
      position: 'fixed',
      width: 300,
      top: 0,
      right: 0
    };
    return (
      <div style={style}>
        {messages.map(message => {
          return (
            <Message
              key={message.id}
              text={message.text}
              type={message.type}
              onDismissClick={::this.onDismissClick.bind(this, message.id)}
            />
          );
        })}
      </div>
    );
  }
}
