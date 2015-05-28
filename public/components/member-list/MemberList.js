import React,{Component} from 'react';
import {Link} from 'react-router';

export default class Members extends Component {
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
