import React from 'react';
import axios from 'axios';

export default class TodoCreate extends React.Component {
  constructor(props) {
    super(props);

    this.descriptionOnChange = this.descriptionOnChange.bind(this);
    this.priorityOnChhange = this.priorityOnChhange.bind(this);
    this.completedOnChange = this.completedOnChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      description: '',
      priority: '',
      completed: false
    }
  }

  descriptionOnChange(e) {
    this.setState({
      description: e.target.value
    });
  }

  priorityOnChhange(e) {
    this.setState({
      priority: e.target.value
    });
  }

  completedOnChange(e) {
    this.setState({
      completed: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    axios.post('/todos/create', {
      description: this.state.description,
      priority: this.state.priority,
      completed: this.state.completed
    }).then(res => {
      console.log(res.data);
      this.props.history.push('/');
    });
  }

  render() {
    return (
      <div>
        <h1>CreateTodo</h1>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="description">Description</label>
          <input type="text" name="description" id="description" value={this.state.description} onChange={this.descriptionOnChange} />
          <input type="radio" name="lowPriority" id="lowPriority" checked={this.state.priority === 'Low'} value="Low" onChange={this.priorityOnChhange} /> Low
          <input type="radio" name="mediumPriority" id="mediumPriority" checked={this.state.priority === 'Medium'} value="Medium" onChange={this.priorityOnChhange} /> Medium
          <input type="radio" name="highPriority" id="highPriority" checked={this.state.priority === 'High'} value="High" onChange={this.priorityOnChhange} /> High
          <input type="checkbox" name="completed" id="completed" value={this.state.completed} onChange={this.completedOnChange}/> Completed
          <button type="submit">Create</button>
        </form>
      </div>
    )
  }
}
