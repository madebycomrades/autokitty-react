import React from 'react';
import Router from 'react-router';
import Chrome from './components/chrome/Chrome';
import NewProject from './components/new-project/NewProject';
import ProjectHandler from './components/project-handler/ProjectHandler';

let {Route,DefaultRoute} = Router;

export default (
  <Route name="home" path="/" handler={Chrome}>
    <Route name="project" path="/project/:projectId" handler={ProjectHandler}/>
    <DefaultRoute name="new-project" handler={NewProject}/>
  </Route>
);
