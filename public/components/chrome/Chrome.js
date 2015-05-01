import React from 'react';
import Router from 'react-router';

let {RouteHandler} = Router;

export default class Chrome extends React.Component {

  render () {
    return (
      <div className="Chrome">
        <h1>AutoKitty</h1>
        <h4>This kitty sorts out your complicated group expenses</h4>
        <RouteHandler/>
      </div>
    );
  }
};
