import React from 'react';
import Router from 'react-router';
import Radium from 'radium';

let {Link,RouteHandler} = Router;

let styles = {
  base: {
    backgroundColor: 'yellow'
  },
  baseCentred: {
    maxWidth: '500',
    margin: '0 auto'
  },
  title: {
    marginTop: 0
  }
};

class Chrome extends React.Component {
  render () {
    let flux = this.props.flux;
    return (
      <div style={[
        styles.base,
        styles.baseCentred
      ]}>
        <h1 style={styles.title}><Link to="home">AutoKitty</Link></h1>
        <h4>This kitty sorts out your complicated group expenses</h4>
        <RouteHandler flux={flux}/>
      </div>
    );
  }
}

export default Radium.Enhancer(Chrome);
