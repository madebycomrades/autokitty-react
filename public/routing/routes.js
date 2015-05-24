import React from 'react';
import Router from 'react-router';
import Chrome from '../components/chrome/Chrome';
import NewProject from '../components/new-project/NewProject';
import ProjectContainer from '../components/project-container/ProjectContainer';

let {Route,DefaultRoute} = Router;

export default (
  <Route name="home" path="/" handler={Chrome}>
    <Route name="project" path="/project/:projectId" handler={ProjectContainer}/>
    <DefaultRoute name="new-project" handler={NewProject}/>
  </Route>
);
