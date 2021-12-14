const { response, request } = require('express');
const express = require('express');
const app = express();
//importing mongoose 
const mongoose = require('mongoose');
// importing todoController
const todoController = require('./controllers/todoController');

app.use(express.json());

app.post('/todo',todoController.addTodo);

app.get ('/todo',todoController.getAllTodo);
app.put('/todo',todoController.updateById);
app.delete('/todo',todoController.deleteById);


// listening to request on localhost port 5010
app.listen(5010,() => {
    console.log("My server is Up and running ");
    // connecting to the database
    mongoose.connect('mongodb+srv://sammy0288:sammy0288@cluster0.68gyj.mongodb.net/todo_db?retryWrites=true&w=majority')
    .then(function(){
        console.log("DataBase is connected");
    })
    .catch(function(error){
        // console.log("DataBase not connect",error);
        console.log(`DataBase not connected ${error}`);
    });
});

