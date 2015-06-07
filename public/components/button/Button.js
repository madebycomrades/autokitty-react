import React,{Component} from 'react';

export default class Chrome extends Component {
  render () {
    return (
      <a {...this.props}>
        {this.props.children}
      </a>
    );
  }
}
