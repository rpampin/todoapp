import React from 'react';

const TodoItem = props => (
  <tr>
    <th>[{props.item.completed ? 'x' : ' '}]</th>
    <td className={props.item.completed ? 'completed' : ''}>{props.item.description}</td>
    <td className={props.item.completed ? 'completed' : ''}>{props.item.priority}</td>
    <td>Edit</td>
    <td>Delete</td>
  </tr>
)

export default TodoItem;