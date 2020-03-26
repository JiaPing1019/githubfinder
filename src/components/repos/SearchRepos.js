import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const SearchRepos = ({ match }) => {
  const githubContext = useContext(GithubContext)
  const alertContext = useContext(AlertContext)
  const [text, setText] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if(text === '') {
      alertContext.setAlert('Please enter something for repos', 'light');
    } else {
      githubContext.searchRepos(text);
      setText('');
    }
  };

  const onChange = e => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Repos...'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search Repos'
          className='btn btn-dark btn-block'
        />
      </form>
      {/* TODO: Need to change into clearRepos */}
      {githubContext.repos.length > 0 && (
        <button
          className='btn btn-light btn-block'
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default SearchRepos;
