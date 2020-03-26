import React, { Fragment } from 'react';
import SearchRepos from '../repos/SearchRepos';
import RepoLists from '../repos/RepoLists';
 
const UsersPage = () => (
  <Fragment>
    <SearchRepos />
    <RepoLists />
  </Fragment>
);

export default UsersPage;
