import React, {Component} from 'react';
import Link from '../link/Link';

export default class Chrome extends Component {

  render () {
    return (
      <div>
        <h1><Link route="home">AutoKitty</Link></h1>
        <h4>This kitty sorts out your complicated group expenses</h4>
        {this.props.children}
      </div>
    );
  }
}
