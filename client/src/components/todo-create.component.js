import React from 'react';
import axios from 'axios';

import Typography from '@material-ui/core/Typography';

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
      <div style={{ display: "grid", justifyItems: "center" }}>
        <Typography variant="h4">Create Todo</Typography>
        <TodoForm onSubmit={this.onSubmit} />
      </div>
    )
  }
}
