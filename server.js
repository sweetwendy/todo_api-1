const { response, request } = require('express');
const express = require('express');
const app = express();

app.get('/', (request,response)=> {
    response.send('Hello this is a get response');
});

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
app.listen(5010,() => {
    console.log("My server is Up and running ");
});

