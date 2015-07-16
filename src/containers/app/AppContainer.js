import {Provider} from 'react-redux';
import createStoreShape from 'react-redux/lib/utils/createStoreShape';
import React,{PropTypes} from 'react';
import RootContainer from '../root/RootContainer';

const routerShape = PropTypes.shape({
  transitionTo: PropTypes.func.isRequired,
  reverseRoute: PropTypes.func.isRequired
});

export default class AppContainer {

  static propTypes = {
    store: createStoreShape(PropTypes).isRequired,
    router: routerShape.isRequired
  }

  static childContextTypes = {
    router: routerShape.isRequired
  };

  getChildContext () {
    return {router: this.props.router};
  }

  render () {
    return (
      <Provider store={this.props.store}>
        {() => <RootContainer/>}
      </Provider>
    );
  }
}
