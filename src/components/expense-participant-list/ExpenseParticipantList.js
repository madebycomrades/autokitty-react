import React, {Component, PropTypes} from 'react';

export default class ExpenseParticipantList extends Component {

  static propTypes = {
    participants: PropTypes.array.isRequired,
    removeParticipant: PropTypes.func.isRequired
  };

  removeButtonClicked (memberSlug, e) {
    e.preventDefault();
    this.props.removeParticipant(memberSlug);
  }

  render () {
    const {participants} = this.props;
    const NoParticipants = <p>This expense has no participants. Add some below...</p>;
    const TheList = (
      <ul>
        {participants.map(participant => {
          return (
            <li key={participant.slug}>{participant.name}
              <span> </span>
              <a href="#" onClick={::this.removeButtonClicked.bind(this, participant.slug)}>Remove</a>
            </li>
          );
        })}
      </ul>
    );
    return participants.length > 0 ? TheList : NoParticipants;
  }
}
