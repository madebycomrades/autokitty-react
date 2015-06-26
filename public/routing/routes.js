import React from 'react';
import Router from 'react-router';
import Chrome from '../components/chrome/Chrome';
import NewProject from '../components/new-project/NewProject';
import ProjectContainer from '../components/project-container/ProjectContainer';
import MemberList from '../components/member-list/MemberList';
import Member from '../components/member/Member';

let {Route,DefaultRoute} = Router;

export default (
  <Route name="home" path="/" handler={Chrome}>
    <DefaultRoute name="new-project" handler={NewProject}/>
    <Route name="project" path="/project/:projectId" handler={ProjectContainer}>
      <DefaultRoute name="member-list" handler={MemberList}/>
      <Route name="member" path="member/:memberSlug" handler={Member}/>
    </Route>
  </Route>
);
