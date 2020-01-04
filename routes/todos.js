var express = require('express');
var router = express.Router();

let Todo = require('../models/todo.model');

router.get('/', function (req, res, next) {
  Todo.find(function (err, todos) {
    if (err) {
      console.log(err);
    } else {
      res.json(todos);
    }
  });
});

router.get('/:id', function (req, res) {
  Todo.findById(req.params.id, function (err, todo) {
    res.json(todo);
  });
});

router.post('/create', function (req, res) {
  let todo = new Todo(req.body);
  todo.save()
    .then(todo => {
      res.status(200).json({ 'todo': 'todo added successfully' });
    })
    .catch(err => {
      res.status(400).send('adding new todo failed');
    });
});

router.post('/update/:id', function (req, res) {
  Todo.findById(req.params.id, function (err, todo) {
    if (!todo)
      res.status(404).send("data is not found");
    else {
      todo.description = req.body.description;
      todo.priority = req.body.priority;
      todo.completed = req.body.completed;

      todo.save().then(todo => {
        res.json('Todo updated!');
      })
        .catch(err => {
          res.status(400).send("Update not possible");
        });
    }
  });
});

router.delete('/:id', function (req, res) {
  Todo.findById(req.params.id, function (err, todo) {
    if (!todo)
      res.status(404).send("data is not found");
    else {
      todo.delete().then(todo => {
        res.json('Todo deleted!');
      })
      .catch(err => {
        res.status(400).send('Delete not possible');
      });
    }
  });

});

module.exports = router;
