import React, {Component, PropTypes} from 'react';

export default class NewProject extends Component {

  static propTypes = {
    createProject: PropTypes.func.isRequired
  };

  state = {title: null};

  onChange (e) {
    this.setState({title: e.target.value});
  }

  onSubmit (e) {
    e.preventDefault();
    this.props.createProject(this.state.title);
  }

  render () {
    var title = this.state.title;
    return (
      <div>
        <p>Start a new project</p>
        <form onSubmit={::this.onSubmit}>
          <input autoFocus="true" type="text" value={title} placeholder="Project title" onChange={::this.onChange}/>
          <input type="submit" value="Create"/>
        </form>
      </div>
    );
  }
}
