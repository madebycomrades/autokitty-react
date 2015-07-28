import React, {Component, PropTypes} from 'react';
import Link from '../link/Link';
import MessageList from '../message-list/MessageList';

export default class Chrome extends Component {

  static propTypes = {
    children: PropTypes.element.isRequired,
    messages: PropTypes.array.isRequired,
    removeMessage: PropTypes.func.isRequired
  };

  render () {
    const {messages, removeMessage} = this.props;
    return (
      <div>
        <h1><Link route="home">AutoKitty</Link></h1>
        <h4>This kitty sorts out your complicated group expenses</h4>
        {this.props.children}
        <MessageList messages={messages} removeMessage={removeMessage}/>
      </div>
    );
  }
}
