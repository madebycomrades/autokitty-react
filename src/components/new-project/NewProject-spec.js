import proxyquire from 'proxyquire';
import React,{Component} from 'react/addons';
import FluxMock from '../../flux/Flux-mock';

let {
  renderIntoDocument: render,
  findRenderedDOMComponentWithTag: byTag,
  findRenderedComponentWithType: byType,
  Simulate
} = React.addons.TestUtils;

class ProjectListMock extends Component {
  render () {
    return <div/>;
  }
}

class ButtonMock extends Component {
  render () {
    return <div/>;
  }
}

let NewProject = proxyquire('./NewProject',{
  '../project-list/ProjectList': ProjectListMock,
  '../button/Button': ButtonMock,
  '../../flux/Flux': FluxMock
});

describe('NewProject component',() => {

  let newProject;
  let flux;

  beforeEach(() => {
    flux = new FluxMock();
    newProject = render(<NewProject flux={flux}/>);
  });

  it('renders a button',() => {
    let button = byType(newProject,ButtonMock);
    expect(button).toBeDefined();
  });

  it('renders a ProjectList',() => {
    let projectList = byType(newProject,ProjectListMock);
    expect(projectList).toBeDefined();
  });

  it('renders an input for the project title',() => {
    let input = byTag(newProject,'input');
    expect(input).toBeDefined();
    expect(input.getDOMNode().getAttribute('type')).toBe('text');
  });

  it('updates the project title',() => {
    let input = byTag(newProject,'input');
    Simulate.change(input,{target: {value: 'Test Project'}});
    expect(newProject.state.title).toBe('Test Project');
  });

  describe('when creating a new project',() => {

    let projectTitle = 'Test Project';

    beforeEach(() => {
      spyOn(flux,'getActions').and.callThrough();
      spyOn(flux.projectActions,'newProject');
      let input = byTag(newProject,'input');
      Simulate.change(input,{target: {value: projectTitle}});
      let form = byTag(newProject,'form');
      Simulate.submit(form);
    });

    it('retrieves the project actions',() => {
      expect(flux.getActions).toHaveBeenCalledWith('project');
    });

    it('invokes the newProject action',() => {
      expect(flux.projectActions.newProject).toHaveBeenCalledWith({title: projectTitle});
    });
  });
});