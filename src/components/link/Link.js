import React,{PropTypes,Component} from 'react';

export default class Link extends Component {

  static contextTypes = {
    location: PropTypes.shape({
      transitionTo: PropTypes.func.isRequired,
      reverse: PropTypes.func.isRequired
    })
  };

  static propTypes = {
    route: PropTypes.string.isRequired,
    params: PropTypes.object
  };

  handleClick (e) {
    e.preventDefault();
    const path = e.target.getAttribute('data-path');
    this.context.location.transitionTo(path);
  }

  render () {
    const path = this.context.location.reverse(this.props.route,this.props.params);
    return <a href={path} data-path={path} onClick={::this.handleClick}>
      {this.props.children}
    </a>;
  }
}
