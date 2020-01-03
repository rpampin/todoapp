import React from 'react';
import axios from 'axios';

const Todo = props => (
  <tr>
    <th>[]</th>
    <td className={props.item.completed ? 'completed' : ''}>{props.item.description}</td>
    <td className={props.item.completed ? 'completed' : ''}>{props.item.priority}</td>
    <td>Edit</td>
    <td>Delete</td>
  </tr>
)

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
  }

  componentDidMount() {
    axios.get('/todos/')
      .then(response => {
        this.setState({ todos: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  todoList() {
    return this.state.todos.map((item, index) => {
      return <Todo item={item} key={index} />
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