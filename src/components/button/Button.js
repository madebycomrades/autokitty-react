import React,{Component} from 'react';

export default class Chrome extends Component {
  render () {
    return <a href="#" onClick={this.props.onClick}>{this.props.children}</a>;
  }
}
