import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
  SEARCH_USERS,
  SEARCH_REPOS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
  GET_EVENTS
} from '../types';

let githubClientId;
let githubClentSecret;

if (process.env.NODE_ENV !== 'production') {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClentSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClentSecret = process.env.GITHUB_CLIENT_SECRET;
}

const GithubState = props => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    events: [],
    loading: false
	};

  // Boilerplate
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search Users
  const searchUsers = async text => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClentSecret}`);

    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items
    });
  };

  // Search Repos
  const searchRepos = async text => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/repositories?q=${text}&client_id=${githubClientId}&client_secret=${githubClentSecret}`);

    dispatch({
      type: SEARCH_REPOS,
      payload: res.data.items
    });
  };

  // Get User
  const getUser = async (username) => {
    setLoading();

    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClentSecret}`);

    dispatch({
      type: GET_USER,
      payload: res.data
    });
  };

  // Get Repos
  const getUserRepos = async (username) => {
    setLoading();

    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    dispatch({
      type: GET_REPOS,
      payload: res.data
    });
  };

  // Clear Users
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  // Set Loading

  // Dispatch our reducers
  const setLoading = () => dispatch({ type: SET_LOADING });

  // Get Events 
  const getUserEvents = async (username) => {
    setLoading();

    const res = await axios.get(`https://api.github.com/users/${username}/events?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    dispatch({
      type: GET_EVENTS,
      payload: res.data
    });
  };


  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        events: state.events,
        loading: state.loading,
        searchUsers,
        searchRepos,
        clearUsers,
        getUser,
        getUserRepos,
        getUserEvents
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
