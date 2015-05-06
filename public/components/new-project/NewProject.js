import React from 'react';
import Router from 'react-router';
import ProjectList from '../project-list/ProjectList';
import {getRouter} from '../../router';

let {Link} = Router;

export default class NewProject extends React.Component {

  state = {title: null}

  change = e => {
    this.setState({title: e.target.value});
  }

  submit = e => {
    e.preventDefault();
    let projectActions = this.props.flux.getActions('project');
    let router = getRouter();
    projectActions.newProject({title: this.state.title})
      .then(response => router.transitionTo('project',{projectId:response._id}));
  }

  render () {
    var title = this.state.title;
    return (
      <div>
        <p>Start a new project</p>
        <form onSubmit={this.submit}>
          <input type="text" value={title} placeholder="Project title" onChange={this.change}/>
          <button onClick={this.submit}>Go</button>
        </form>
        <ProjectList/>
      </div>
    );
  }
};
