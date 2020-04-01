import React, {Fragment, useEffect, useContext} from 'react';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import Events from '../events/Events';
import {Link} from 'react-router-dom';
import GithubContext from '../../context/github/githubContext';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';

const User = ({match}) => {
  const githubContext = useContext(GithubContext);
  const {user, loading, getUser, repos, events, getUserRepos, getUserEvents} = githubContext;
  const classes = useStyles();

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    getUserEvents(match.params.login);
    //eslint-disable-next-line
  }, []);

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) return <Spinner />;

  return (
    <Fragment>
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Link to="/" className="btn btn-light">
              Back to search
            </Link>
            Hirable:{' '}
            {hireable ? (
              <i className="fas fa-check text-success" />
            ) : (
              <i className="fas fa-items-circle text-danger" />
            )}
            <div className="card grid-2">
              <div className="all-center">
                <img
                  src={avatar_url}
                  className="round-img"
                  alt=""
                  style={{width: '150px'}}
                />
                <h1>{name}</h1>
                <p>Location: {location}</p>
              </div>
              <div>
                {bio && (
                  <Fragment>
                    <h3>Bio</h3>
                    <p>{bio}</p>
                  </Fragment>
                )}
                <a href={html_url} className="btn btn-dark my-1">
                  Visit Github Profile
                </a>
                <ul>
                  <li>
                    {login && (
                      <Fragment>
                        <strong>Username: </strong> {login}
                      </Fragment>
                    )}
                  </li>

                  <li>
                    {company && (
                      <Fragment>
                        <strong>Company: </strong> {company}
                      </Fragment>
                    )}
                  </li>

                  <li>
                    {blog && (
                      <Fragment>
                        <strong>Blog: </strong> {blog}
                      </Fragment>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className="card text-center">
              <div className="badge badge-primary">Followers: {followers}</div>
              <div className="badge badge-success">Following {following}</div>
              <div className="badge badge-danger">
                Public Repos: {public_repos}
              </div>
              <div className="badge badge-dark">
                Public Gists: {public_gists}
              </div>
            </div>
          </Grid>
          <Grid item xs={6}>
            <Repos repos={repos} />
          </Grid>
          <Grid item xs={6}>
            <Events events={events} />
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default User;
