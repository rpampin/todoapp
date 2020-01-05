import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import TodoList from "./components/todo-list.component";
import TodoCreate from './components/todo-create.component';
import TodoEdit from './components/todo-edit.component';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Link to="/" className="nav-link">Todos</Link>
        <Link to="/create" className="nav-link">Create Todo</Link>
        <div>
          <Route path="/" exact component={TodoList} />
          <Route path="/create" component={TodoCreate} />
          <Route path="/edit/:id" component={TodoEdit} />
        </div>
      </Router>
    );
  }
}
