import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as messageActions from '../../actions/messageActions'
import Chrome from '../../components/chrome/Chrome'
import HomeContainer from '../home/HomeContainer'
import ProjectContainer from '../project/ProjectContainer'
import React, {PropTypes} from 'react'

@connect(state => ({
  location: state.location,
  messages: state.messages
}))
export default class RootContainer {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
    messages: PropTypes.array.isRequired
  }

  render () {
    const {dispatch, location, messages} = this.props
    const {removeMessage} = bindActionCreators(messageActions, dispatch)
    return (
      <Chrome messages={messages} removeMessage={removeMessage}>
        {this.renderRoute(location)}
      </Chrome>
    )
  }

  renderRoute (location) {
    return location.name === 'home' ? <HomeContainer/> : <ProjectContainer/>
  }
}
