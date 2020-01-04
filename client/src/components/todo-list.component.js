import React from 'react';
import axios from 'axios';
import TodoItem from './todo-item.component';

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.deleteTodo = this.deleteTodo.bind(this);

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
      return <TodoItem item={item} onDelete={this.deleteTodo} key={index} />
    });
  }

  deleteTodo(todoId) {
    console.log('DELETING!!');
    // axios.delete('/' + todoId)
    // .then(response => {
    //   let toRemove = this.state.todos.filter(item => item._id == todoId)[0];
    //   let toRemoveIndex = this.state.todos.indexOf(toRemove);
    //   this.setState({ todos: this.state.todos.splice(toRemoveIndex, 1) });
    // })
    // .catch(function (err) {
    //   console.log(err);
    // });
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