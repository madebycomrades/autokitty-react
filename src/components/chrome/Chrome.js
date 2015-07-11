import React,{Component} from 'react';

export default class Chrome extends Component {

  render () {
    return (
      <div>
        <h1>AutoKitty</h1>
        <h4>This kitty sorts out your complicated group expenses</h4>
        {this.props.children}
      </div>
    );
  }
}
