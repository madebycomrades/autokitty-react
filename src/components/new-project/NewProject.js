import React,{Component} from 'react';
import Button from '../button/Button';

export default class NewProject extends Component {

  state = {title: null};

  onChange (e) {
    this.setState({title: e.target.value});
  }

  onSubmit (e) {
    e.preventDefault();
    this.props.addProject(this.state.title);
  }

  render () {
    var title = this.state.title;
    return (
      <div>
        <p>Start a new project</p>
        <form onSubmit={this.submit}>
          <input type="text" value={title} placeholder="Project title" onChange={::this.onChange}/>
          <Button onClick={::this.onSubmit}>Go</Button>
        </form>
      </div>
    );
  }
}