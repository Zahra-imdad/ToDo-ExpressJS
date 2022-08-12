const express = require('express');
const router = express.Router();
const restController = require('../controller/crud-controller')

const path =require('path');

router.get('/todo',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','view','crud.html'))
})

router.get('/todo_all',restController.allTodos)
router.get('/todo/:todoId',restController.singleTodo)
router.post('/addTodo',restController.addTodo)
router.put('/update_todo',restController.updateTodo)
router.delete('/del_todo/:todoId',restController.deleteTodo)

module.exports = router;