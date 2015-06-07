import React,{Component} from 'react';
import ProjectList from '../project-list/ProjectList';
import Button from '../button/Button';
import Flux from '../../flux/Flux';

export default class NewProject extends Component {

  static propTypes = {
    flux: React.PropTypes.instanceOf(Flux)
  };

  state = {title: null};

  change = e => {
    this.setState({title: e.target.value});
  };

  submit = e => {
    e.preventDefault();
    this.props.flux
      .getActions('project')
      .newProject({title: this.state.title});
  };

  render () {
    var title = this.state.title;
    return (
      <div>
        <p>Start a new project</p>
        <form onSubmit={this.submit}>
          <input type="text" value={title} placeholder="Project title" onChange={this.change}/>
          <Button onClick={this.submit} primary={true}>Go</Button>
        </form>
        <ProjectList/>
      </div>
    );
  }
}
