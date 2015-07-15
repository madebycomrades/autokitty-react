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
    return <Chrome>{this.renderChild()}</Chrome>;
  }

  renderChild () {
    const {location} = this.props;
    return location.name === "home" ? <HomeContainer/> : <ProjectContainer/>;
  }
}
