const { response, request } = require('express');
const express = require('express');
const app = express();
//importing mongoose 
const mongoose = require('mongoose');
// importing todoController
const todoController = require('./controllers/todoController');



app.post('/todo', todoController.addTodo);

app.post('/',(request,response)=>{
response.send('hello this is a post response')
}
);
app.put('/',(request,response)=>{
    response.send('this is a put response')
}
);

app.get('/todos',(request,response)=>{
   response.send([{
       'title':'Plan trip to Kumasi',
       'description':'I will be going to kumasi this weekend',
       'time':'Today',
       'isCompleted': false
   }]);    
});
// listening to request on localhost por 5010
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

