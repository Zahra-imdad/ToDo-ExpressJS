let todos = require('../model/crud-model') 
const express = require('express');
const bodyParser = require('body-parser')
const app = express();


//const userValidation = require('../validations/userValidations');
 let lastTodoId=3
 app.use(bodyParser.urlencoded({extended:false}))
 app.use(express.json())
module.exports= {
  
    allTodos:(req, res) => {
        res.json({ todos: todos });
      },
    
    singleTodo:(req, res) => {
        const todoId = parseInt(req.params.todoId);
        const todo  = todos.find((todo) => todo.id === todoId);
        if (todo) {
          res.json({ todo: todo });
        } else {
          res.json({ error: true, message: 'Todo not found' })
        }
      },

      addTodo: (req, res) => {
        const todo = req.body; 
        console.log(todo)
        res.json({"datayousent": req.body})
        todo.id = lastTodoId;
        lastTodoId++;
        todos.push(todo);
        res.json({ success: true, message: 'Todo is added' });
      },

      updateTodo:(req, res,next) => {
        const todoId = req.body.todoId;
        const updatedTodo = req.body.updateTodo;
        const todo = todos.find(todo => todo.id === todoId);
        if (toddo) {
          toddo.todo = updatedTodo;
          res.json({ success: true, message: `The Todo is updated to ${updatedTodo}`});
        } else {
          next({statue:404,message:"Todo not found"})
          //res.json({ error: true, message: 'UserId not found' });
        }
      },

      deleteTodo:(req, res) => {
        const todoId = parseInt(req.params.todoId);
        const newTodo = todos.filter(todo => todo.id != todoId);
        todos = newTodo;
        res.json({ success:1, message: 'Todo deleted' });
      }
}

