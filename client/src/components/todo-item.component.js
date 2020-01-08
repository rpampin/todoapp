import React from 'react';
import { Link } from 'react-router-dom';

import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const TodoItem = props => (
  <TableRow key={props._id}>
    <TableCell style={{ width: 82 }}>
      <Checkbox
        checked={props.item.completed}
        onChange={() => props.onCompleted(props.item._id)}
      />
    </TableCell>
    <TableCell className={props.item.completed ? 'completed' : ''}>
      {props.item.description}
    </TableCell>
    <TableCell className={props.item.completed ? 'completed' : ''}>
      {props.item.priority}
    </TableCell>
    <TableCell style={{ width: 48, padding: 0 }}>
      <IconButton color="inherit" component={Link} to={'/edit/' + props.item._id}>
        <EditIcon />
      </IconButton>
    </TableCell>
    <TableCell style={{ width: 48 }}>
      <IconButton color="inherit" onClick={() => props.onDelete(props.item._id)}>
        <DeleteIcon />
      </IconButton>
    </TableCell>
  </TableRow>
)

export default TodoItem;