import React from 'react';
import PropTypes from 'prop-types';
import EventItem from './EventItem';

const Events = ({ events }) => {
  return events.map(event => <EventItem event={event} key={event.id} />)
}

Events.propTypes = {
  repos: PropTypes.array.isRequired
}

export default Events;
