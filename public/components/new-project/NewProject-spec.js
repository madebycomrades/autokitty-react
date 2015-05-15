import proxyquire from 'proxyquire';
import React from 'react';
import FluxMock from '../../../jasmine-helpers/mocks/Flux';
import routerMock from '../../../jasmine-helpers/mocks/router';

class ProjectListMock extends React.Component {
  render () {
    return <div/>;
  }
}

let NewProject = proxyquire('./NewProject',{
  '../project-list/ProjectList': ProjectListMock,
  '../../router': routerMock
});

describe('NewProject',() => {

  let newProject;
  let fluxMock;

  beforeEach(() => {
    fluxMock = new FluxMock();
    newProject = renderIntoDocument(<NewProject flux={fluxMock}/>);
  });

  it('should render a button',() => {
    let button = findRenderedDOMComponentWithTag(newProject,'button');
    expect(button).toBeDefined();
  });

  it('should render a ProjectList',() => {
    let projectList = findRenderedComponentWithType(newProject,ProjectListMock);
    expect(projectList).toBeDefined();
  });

  it('should render a text input for the project title',() => {
    let input = findRenderedDOMComponentWithTag(newProject,'input');
    expect(input).toBeDefined();
    expect(input.getDOMNode().getAttribute('type')).toBe('text');
  });

  it('should update the project title',() => {
    let input = findRenderedDOMComponentWithTag(newProject,'input');
    Simulate.change(input,{target: {value: 'Test Project'}});
    expect(newProject.state.title).toBe('Test Project');
  });

  describe('creating a new project',() => {

    beforeEach(() => {
      spyOn(routerMock.router,'transitionTo');
      spyOn(fluxMock,'getActions').and.callThrough();
      spyOn(fluxMock.projectActions,'newProject').and.callThrough();
      let input = findRenderedDOMComponentWithTag(newProject,'input');
      Simulate.change(input,{target: {value: 'Test Project'}});
      let form = findRenderedDOMComponentWithTag(newProject,'form');
      Simulate.submit(form);
    });

    it('should retrieve the project actions',() => {
      expect(fluxMock.getActions).toHaveBeenCalledWith('project');
    });

    it('should invoke the newProject action',() => {
      expect(fluxMock.projectActions.newProject).toHaveBeenCalledWith({title: 'Test Project'});
    });

    it('should transition to the new project',done => {
      setTimeout(() => {
        expect(routerMock.router.transitionTo).toHaveBeenCalledWith('project',{projectId: 'test'});
        done();
      },0);
    });
  });
});
