import React, {PropTypes, Component} from 'react';

export default class Link extends Component {

  static contextTypes = {
    router: PropTypes.shape({
      transitionTo: PropTypes.func.isRequired,
      reverseRoute: PropTypes.func.isRequired
    }).isRequired
  };

  static propTypes = {
    route: PropTypes.string.isRequired,
    params: PropTypes.object
  };

  handleClick (e) {
    e.preventDefault();
    this.context.router.transitionTo(this.props.route, this.props.params);
  }

  render () {
    const path = this.context.router.reverseRoute(this.props.route, this.props.params);
    return (
      <a href={path} onClick={::this.handleClick}>
        {this.props.children}
      </a>
    );
  }
}
