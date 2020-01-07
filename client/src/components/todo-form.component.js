import React from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

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
    console.log('Hello!');
    e.preventDefault();

    this.props.onSubmit({
      description: this.state.description,
      priority: this.state.priority,
      completed: this.state.completed
    });
  }

  render() {
    return (
      <FormControl>
        <TextField required id="description" label="Description" aria-label="description"
          value={this.state.description} onChange={this.descriptionOnChange} />
        <RadioGroup aria-label="priority" name="priority"
          row value={this.state.priority} onChange={this.priorityOnChhange} required>
          <FormControlLabel value="Low" control={<Radio />} label="Low" />
          <FormControlLabel value="Medium" control={<Radio />} label="Medium" />
          <FormControlLabel value="High" control={<Radio />} label="High" />
        </RadioGroup>
        <FormControlLabel label="Completed" aria-label="completed" control={
          <Checkbox
            checked={this.state.completed}
            onChange={this.completedOnChange}
          />}
        />
        <Button variant="contained" color="primary" aria-label="save" onClick={this.onSubmit}>Save</Button>
      </FormControl>
    )
  }
}