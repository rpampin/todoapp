import React from 'react';
import axios from 'axios';

import TodoForm from './todo-form.component';

export default class TodoCreate extends React.Component {
  constructor(props) {
    super(props);
    
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(todo) {
    axios.post('/todos', todo).then(res => {
      console.log(res.data);
      this.props.history.push('/');
    })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h1>Create Todo</h1>
        <TodoForm onSubmit={this.onSubmit} />
      </div>
    )
  }
}
