import React from 'react';
import PropTypes from 'prop-types';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
const moment = require('moment-timezone');

const EventItem = ({event: {type, repo, created_at}}) => {
  console.log(type)
  return (
    <ListItem title= '123'>
      <a href={repo.url}>
        {repo.name}
      </a>
      <ListItemText>
        {type}
      </ListItemText>
      <p>{moment(created_at).tz('Asia/Tokyo').format()}</p>
    </ListItem>
  );
};

EventItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default EventItem;
