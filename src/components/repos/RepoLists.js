import React, {useContext} from 'react';
import RepoItem from './RepoItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';

import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';

const RepoLists = () => {
  const githubContext = useContext(GithubContext);
  const {loading, repos} = githubContext;
  const classes = useStyles();

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className={classes.root}>
        <List height={400} width={300}>
          {repos.map(repo => (
            <RepoItem key={repo.id} repo={repo} />
          ))}
        </List>
      </div>
    );
  }
};

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: 400,
    maxWidth: 300,
    backgroundColor: theme.palette.background.paper,
  },
}));
// const userStyle = {
//   display: 'griduserStyle',
// 	gridTemplatecolumns: 'repeat(3, 1fr)',
// 	gridGap: '1rem'
// }

export default RepoLists;
