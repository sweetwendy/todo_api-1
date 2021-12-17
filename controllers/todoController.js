
const todoModel = require('../models/todoModel');

 async function addTodo(request,response){
   try {
    const newTodo = await todoModel.create(request.body);
    response.status(200).json(newTodo);
   } catch (error) {
       console.log("Something went wrong",error.message);
   }
}

async function getAllTodo(request,response){
try {
    const getAll = await todoModel.find();
    response.status(200).json(getAll);

} catch (error) {
    console.log("Something went wrong",error.message);
    response.status(400);
    
}

    

}

async function getTodoById(request,response){
 try {
    const get1todo = await todoModel.findById(request.params.todoId);  
 } catch (error) {
    response.status(200).json(get1todo);       
 }
}
async function updateById (request,response){
try {
    const update = await todoModel.findByIdAndUpdate(request.params.todoId,request.body);
    response.status(200).json(update);
} catch (error) {
  console.log("something went wrong", error.message)  
}
}
async function getTodoById(request,response){
   try {
    const get1todo = await todoModel.findById(request.params.todoId);
    response.status(200).json(get1todo);
   } catch (error) {
       console.log("something went wrong",error.message);
   }
}


async function deleteById(request,response){
    try {
        await todoModel.findByIdAndDelete(request.params.todoId);
        response.status(200).json({message:"todo deleted"});
    } catch (error) {
     console.log("something went wrong",error.message);   
    }

}

async function getAllTodo(request,response){
 try {
  const getAllTodo = await todoModel.find();
  response.status(200).json(getAllTodo);
 } catch (error) {
  console.log("something went wrong", error.message)  
 } 
}
async function updateById (request,response){
    try {
        const update = await todoModel.findByIdAndUpdate(request.params.todoId,request.body);
        response.status(200).json(update);
    } catch (error) {
        console.log("something went wrong",error.message);
    }

}
async function deleteById(request,response){
try {
    await todoModel.findByIdAndDelete(request.params.todoId);
    response.status(200).json({message:"todo deleted"});
} catch (error) {
    console.log("something went wrong",error.message );
}

}
module.exports ={
    addTodo,
    getAllTodo,
    updateById,
    deleteById,
    getTodoById
}