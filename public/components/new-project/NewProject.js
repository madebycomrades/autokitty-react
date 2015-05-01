import React from 'react';
import Router from 'react-router';

let {Link} = Router;

export default class NewProject extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      projectName: null
    };

    this.change = this.change.bind(this);
    this.submit = this.submit.bind(this);
  }

  change (e) {
    this.setState({projectName: e.target.value});
  }

  submit (e) {
    e.preventDefault();
    console.log('TODO: create a new project');
  }

  render () {
    var projectName = this.state.projectName;
    return (
      <div>
        <p>Start a new project</p>
        <form onSubmit={this.submit}>
          <input type="text" value={projectName} placeholder="Project name" onChange={this.change}/>
          <button onClick={this.submit}>Go</button>
        </form>
        <Link to="project" params={{projectId:"foo"}}>Project foo</Link>
      </div>
    );
  }
};
