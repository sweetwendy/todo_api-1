const todoModel = require('../models/todoModel');

async function addTodo(request,response){
const newTodo=await todoModel.create(request.body);
response.status(200).json(newTodo);

}

function getAllTodo(request,response){

}

function updateById (request,response){

}
function deleteById(request,response){

}

module.exports ={
    addTodo,
    getAllTodo,
    updateById,
    deleteById
}