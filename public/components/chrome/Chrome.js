import React,{Component} from 'react';
import {Link,RouteHandler} from 'react-router';

export default class Chrome extends Component {
  render () {
    let flux = this.props.flux;
    return (
      <div>
        <h1><Link to="home">AutoKitty</Link></h1>
        <h4>This kitty sorts out your complicated group expenses</h4>
        <RouteHandler flux={flux}/>
      </div>
    );
  }
}
