import proxyquire from 'proxyquire';
import React from 'react/addons';
import FluxMock from '../../flux/Flux-mock';

let {
  renderIntoDocument: render,
  findRenderedDOMComponentWithTag: byTag,
  findRenderedComponentWithType: byType,
  Simulate
} = React.addons.TestUtils;

class ProjectListMock extends React.Component {
  render () {
    return <div/>;
  }
}

class ButtonMock extends React.Component {
  render () {
    return <div/>;
  }
}

let NewProject = proxyquire('./NewProject',{
  '../project-list/ProjectList': ProjectListMock,
  '../button/Button': ButtonMock,
  '../../flux/Flux': FluxMock
});

describe('NewProject',() => {

  let newProject;
  let flux;

  beforeEach(() => {
    flux = new FluxMock();
    newProject = render(<NewProject flux={flux}/>);
  });

  it('should render a button',() => {
    let button = byType(newProject,ButtonMock);
    expect(button).toBeDefined();
  });

  it('should render a ProjectList',() => {
    let projectList = byType(newProject,ProjectListMock);
    expect(projectList).toBeDefined();
  });

  it('should render a text input for the project title',() => {
    let input = byTag(newProject,'input');
    expect(input).toBeDefined();
    expect(input.getDOMNode().getAttribute('type')).toBe('text');
  });

  it('should update the project title',() => {
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

    it('should retrieve the project actions',() => {
      expect(flux.getActions).toHaveBeenCalledWith('project');
    });

    it('should invoke the newProject action',() => {
      expect(flux.projectActions.newProject).toHaveBeenCalledWith({title: projectTitle});
    });
  });
});
