const { response, request } = require('express');
const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;

//importing mongoose 
const mongoose = require('mongoose');
// importing todoController
const todoController = require('./controllers/todoController');

app.use(express.json());

app.get('/', (request,response)=>{
response.status(200).json({message:"Hello Welcome to my todo API"});
});
  
app.post('/todo',todoController.addTodo);
app.get ('/todo',todoController.getAllTodo);
app.patch('/todo/:todoId',todoController.updateById);
app.delete('/todo/:todoId',todoController.deleteById);
app.get('/todo/:todoId',todoController.getTodoById);


// listening to request on localhost port 5010
app.listen(PORT,() => {
    console.log("My server is Up and running on port :",PORT);
    // connecting to the database
    mongoose.connect(process.env.DB_URL)
    .then(function(){
        console.log("DataBase is connected");
    })
    .catch(function(error){
        // console.log("DataBase not connect",error);
        console.log(`DataBase not connected ${error}`);
    });
});

