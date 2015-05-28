import React,{Component} from 'react';

export default class Mock extends Component {
  render () {
    let props = this.props ? this.props : {};
    return <div {...props}>{this.props.children}</div>;
  }
}
