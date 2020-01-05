import React from 'react';
import { Link } from 'react-router-dom';

const TodoItem = props => (
  <tr>
    <th onClick={() => props.onCompleted(props.item._id)}>[{props.item.completed ? 'x' : ' '}]</th>
    <td className={props.item.completed ? 'completed' : ''}>{props.item.description}</td>
    <td className={props.item.completed ? 'completed' : ''}>{props.item.priority}</td>
    <td>
      <Link to={"/edit/" + props.item._id}>Edit</Link>
    </td>
    <td onClick={() => props.onDelete(props.item._id)}>Delete</td>
  </tr>
)

export default TodoItem;