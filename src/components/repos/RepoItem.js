import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const RepoItem = ({repo: {html_url, full_name}}) => {
  return (
    <div>
      <a href={html_url} className="btn btn-dark btn-sm">
        {full_name}
      </a>
    </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
