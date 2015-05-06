import React from 'react';
import Router from 'react-router';
import ProjectList from '../project-list/ProjectList';

let {Link} = Router;

export default class NewProject extends React.Component {

  state = {title: null}

  change = e => {
    this.setState({title: e.target.value});
  }

  submit = e => {
    e.preventDefault();
    console.log('TODO: create a new project');
    // 1. Get a flux reference
    // 2. Call the newProject action
    // 3. On promise resolved, transitionTo
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
