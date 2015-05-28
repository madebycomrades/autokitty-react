import React,{Component} from 'react';
import Button from '../button/Button';
import MemberRecord from '../../records/MemberRecord';

export default class MemberButton extends Component {

  static propTypes = {
    member: React.PropTypes.instanceOf(MemberRecord)
  };

  render () {
    return (
      <Button/>
    );
  }
}
