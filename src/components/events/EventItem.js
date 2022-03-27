import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
const moment = require('moment-timezone');

const EventItem = ({event: {type, repo, created_at}}) => {
  return (
    <Box
      component="div"
      display="block"
      border={1}
      color="text.secondary"
      m={2}
      pl={10}
			style={{
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundAttachment: 'fixed',
			}}
			>
      <a href={repo.url}>{repo.name}</a>
      <p>{type}</p>
      <p>
        {moment(created_at)
          .tz('Asia/Tokyo')
          .format()}
      </p>
    </Box>
  );
};

EventItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default EventItem;
