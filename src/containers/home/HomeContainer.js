import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as projectActions from '../../actions/projectActions'
import Home from '../../components/home/Home'
import React, {PropTypes} from 'react'

@connect(state => ({
  projects: state.projects
}))
export default class HomeContainer {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    projects: PropTypes.array.isRequired
  }

  render () {
    const {dispatch, projects} = this.props
    const {createProject} = bindActionCreators(projectActions, dispatch)
    return <Home projects={projects} createProject={createProject}/>
  }
}
