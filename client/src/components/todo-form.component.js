import React from 'react';

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.descriptionOnChange = this.descriptionOnChange.bind(this);
    this.priorityOnChhange = this.priorityOnChhange.bind(this);
    this.completedOnChange = this.completedOnChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      previousTodo: null,
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
      completed: !this.state.completed
    });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.todo) {
      if (nextProps.todo === prevState.previousTodo)
        return null;
      if (nextProps.todo.description !== prevState.description
        || nextProps.todo.priority !== prevState.priority
        || nextProps.todo.completed !== prevState.completed)
        return {
          previousTodo: nextProps.todo,
          description: nextProps.todo.description,
          priority: nextProps.todo.priority,
          completed: nextProps.todo.completed
        };
      else
        return null;
    }
    return null;
  }

  onSubmit(e) {
    e.preventDefault();

    this.props.onSubmit({
      description: this.state.description,
      priority: this.state.priority,
      completed: this.state.completed
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} autoComplete="off">
        <label htmlFor="description">Description</label>
        <input type="text" name="description" id="description" value={this.state.description} onChange={this.descriptionOnChange} />
        <input type="radio" name="lowPriority" id="lowPriority" checked={this.state.priority === 'Low'} value="Low" onChange={this.priorityOnChhange} /> Low
          <input type="radio" name="mediumPriority" id="mediumPriority" checked={this.state.priority === 'Medium'} value="Medium" onChange={this.priorityOnChhange} /> Medium
          <input type="radio" name="highPriority" id="highPriority" checked={this.state.priority === 'High'} value="High" onChange={this.priorityOnChhange} /> High
          <input type="checkbox" name="completed" id="completed" checked={this.state.completed} onChange={this.completedOnChange} /> Completed
          <button type="submit">Create</button>
      </form>
    )
  }
}