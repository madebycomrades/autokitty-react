import React from 'react';
import {connect} from 'react-redux';
import Chrome from '../../components/chrome/Chrome';
import HomeContainer from '../home/HomeContainer';
import ProjectContainer from '../project/ProjectContainer';

@connect(state => ({
  location: state.location
}))
export default class AppContainer {

  render () {
    const {location} = this.props;
    const Child = location.name === 'home' ? HomeContainer : ProjectContainer;
    return <Chrome><Child/></Chrome>;
  }
}