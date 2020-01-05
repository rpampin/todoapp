import React from 'react';
import axios from 'axios';
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
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Description</th>
            <th>Priority</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.todoList()}
        </tbody>
      </table>
    )
  }
}