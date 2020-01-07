import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';

import TodoList from "./components/todo-list.component";
import TodoCreate from './components/todo-create.component';
import TodoEdit from './components/todo-edit.component';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  centered: {

  }
});

class App extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Router>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton component={Link} to="/" edge="start" className={classes.menuButton} color="inherit">
                <HomeIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                Todo App
              </Typography>
              <Button component={Link} to="/create" color="inherit">
                Create Todo
              </Button>
            </Toolbar>
          </AppBar>
        </div>
        <Container fixed style={{ padding: '2em' }}>
          <Route path="/" exact component={TodoList} />
          <Route path="/create" component={TodoCreate} />
          <Route path="/edit/:id" component={TodoEdit} />
        </Container>
      </Router>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);