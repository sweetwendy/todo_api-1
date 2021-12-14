const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
   
})

const todoModel = mongoose.model('todos',todoSchema);

module.exports = todoModel;