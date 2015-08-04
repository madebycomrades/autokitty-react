import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as projectActions from '../../actions/projectActions';
import Home from '../../components/home/Home';
import React from 'react';

@connect(state => ({
  projects: state.projects
}))
export default class HomeContainer {

  render () {
    const {dispatch, projects} = this.props;
    const {createProject} = bindActionCreators(projectActions, dispatch);
    return <Home projects={projects} createProject={createProject}/>;
  }
}
