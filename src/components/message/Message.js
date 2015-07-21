import React, {PropTypes, Component} from 'react';

export default class Message extends Component {

  static propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onDismissClick: PropTypes.func.isRequired
  };

  render () {
    const {text, onDismissClick, type} = this.props;
    const style = {
      display: 'flex',
      backgroundColor: type === 'error' ? 'red' : 'lawngreen',
      padding: 5
    };
    const textStyle = {
      flex: 1,
      color: 'white',
      padding: 0,
      margin: 0
    };
    const linkStyle = {
      color: 'white'
    };
    return (
      <div style={style}>
        <p style={textStyle}>{text}</p>
        <a style={linkStyle} href="#" onClick={onDismissClick}>Dismiss</a>
      </div>
    );
  }
}
