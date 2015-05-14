import React from 'react';

export default {
  Link: class extends React.Component {
    render () {
      return <div to={this.props.to}>{this.props.children}</div>;
    }
  },
  RouteHandler: class extends React.Component {
    render () {
      return <div flux={this.props.flux}/>;
    }
  }
};
