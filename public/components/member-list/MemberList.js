import React from 'react';
import Router from 'react-router';

let {Link} = Router;

export default class Members extends React.Component {

  render () {
    let members = this.props.members;
    return (
      <ul>
        {members.map(member => {
          return (
            <li key={member.slug}>
              <Link to="member" params={{memberSlug: member.slug}}>{member.name}</Link>
            </li>
          );
        })}
      </ul>
    );
  }
}
