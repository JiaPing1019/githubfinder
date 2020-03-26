import React, { useContext } from 'react';
import RepoItem from './RepoItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';

const RepoLists = () => {
  const githubContext = useContext(GithubContext);

  const { loading, repos } = githubContext;

  if(loading) {
    return <Spinner />
  } else {
    return (
      <div style={userStyle}>
        {repos.map(repo => (
           <RepoItem key={repo.id} repo= {repo} />
        ))}
      </div>
    )
  }
}

const userStyle = {
  display: 'griduserStyle',
	gridTemplatecolumns: 'repeat(3, 1fr)',
	gridGap: '1rem' 
}

export default RepoLists;
