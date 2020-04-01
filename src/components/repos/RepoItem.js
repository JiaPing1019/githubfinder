import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';

const RepoItem = ({repo: {html_url, full_name}}) => {
  return (
    <ListItem>
      <a href={html_url} className="btn btn-dark btn-sm">
        {full_name}
      </a>
    </ListItem>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
