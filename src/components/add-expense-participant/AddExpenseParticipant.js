import React, {Component, PropTypes} from 'react'

export default class AddExpenseParticipant extends Component {

  static propTypes = {
    nonParticipants: PropTypes.array.isRequired,
    includeParticipant: PropTypes.func.isRequired
  }

  includeButtonClicked (memberSlug, e) {
    e.preventDefault()
    this.props.includeParticipant(memberSlug)
  }

  render () {
    const {nonParticipants} = this.props
    const NoNonParticipants = <p>Everybody is participating in this expense.</p>
    const NonParticipants = (
      <p>
        <span>You can add </span>
        {nonParticipants.map(nonParticipant => {
          return (
            <span key={nonParticipant.slug}>
              <a href='#' onClick={::this.includeButtonClicked.bind(this, nonParticipant.slug)}>{nonParticipant.name}</a>
              <span> </span>
            </span>
          )
        })}
      </p>
    )
    return nonParticipants.length > 0 ? NonParticipants : NoNonParticipants
  }
}
