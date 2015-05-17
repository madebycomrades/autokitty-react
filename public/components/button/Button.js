import React from 'react';
import Radium from 'radium';

let styles = {
  base: {
    backgroundColor: '#000',
    borderRadius: '3',
    color: '#fff',
    cursor: 'pointer',
    display: 'inline-block',
    padding: '5px 5px',
    textAlign: 'center',
    textDecoration: 'none',
    verticalAlign: 'middle',
    ':hover': {
      backgroundColor: '#ccc'
    }
  },
  basePrimary: {
    backgroundColor: '#00f',
    ':hover': {
      backgroundColor: '#0f0'
    }
  }
};

export default Radium.Enhancer(class Chrome extends React.Component {
  render () {
    return (
      <a {...this.props} style={[
        styles.base,
        this.props.primary && styles.basePrimary
      ]}>
        {this.props.children}
      </a>
    );
  }
});
