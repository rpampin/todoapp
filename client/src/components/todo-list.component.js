import React from 'react';
import axios from 'axios';

import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import TodoItem from './todo-item.component';

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.deleteTodo = this.deleteTodo.bind(this);
    this.completeTodo = this.completeTodo.bind(this);

    this.state = { todos: [] };
  }

  componentDidMount() {
    axios.get('/todos/')
      .then(response => {
        this.setState({ todos: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  todoList() {
    return this.state.todos.map((item, index) => {
      return <TodoItem
        onCompleted={this.completeTodo}
        onDelete={this.deleteTodo}
        item={item}
        key={index} />
    });
  }

  completeTodo(todoId) {
    axios.post('/todos/completed/' + todoId)
      .then(response => {
        const todos = this.state.todos;
        const itemIndex = todos.findIndex(item => item._id === todoId);
        todos[itemIndex].completed = !todos[itemIndex].completed;
        this.setState({ todos: todos })
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  deleteTodo(todoId) {
    axios.delete('/todos/' + todoId)
      .then(response => {
        let todos = this.state.todos;
        const itemIndex = todos.findIndex(item => item._id === todoId);
        todos.splice(itemIndex, 1);
        this.setState({ todos: todos });
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <Typography variant="h4">Todo List</Typography>
        <TableContainer component={Paper}>
          <Table aria-label="todo list" size="small">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Priority</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.todoList()}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    )
  }
}