const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: Date
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;  // This should replace 'export default Todo;'
