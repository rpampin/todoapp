import React from 'react';
import axios from 'axios';

import Typography from '@material-ui/core/Typography';

import TodoForm from './todo-form.component';

export default class TodoEdit extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      todo: null
    }
  }

  componentDidMount() {
    axios.get('/todos/' + this.props.match.params.id)
      .then(response => {
        const todo = {
          description: response.data.description,
          priority: response.data.priority,
          completed: response.data.completed
        };
        this.setState({
          todo: todo
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onSubmit(todo) {
    axios.post('/todos/' + this.props.match.params.id, todo).then(res => {
      console.log(res.data);
      this.props.history.push('/');
    })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    console.log('rendering');
    return (
      <div>
        <Typography variant="h4">Edit Todo</Typography>
        <TodoForm onSubmit={this.onSubmit} todo={this.state.todo} />
      </div>
    )
  }
}
