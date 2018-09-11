const Todo = require('../models/todo')

async function findAll(ctx) {
  // Fetch all todos from the db and return as a payload
  const todos = await Todo.find({})
  ctx.body = todos
}

async function create(ctx) {
  // Create new todo from context sent and save to db
  const newTodo = new Todo(ctx.request.body)
  const savedTodo = await newTodo.save()
  ctx.body = savedTodo
}

async function destroy(ctx) {
  // Get id from usr params and find todo in db
  const todo = await Todo.findById(ctx.params.id) 
  
  // Delete todo from db and return deleted object as reference
  const deletedTodo = await todo.remove()
  ctx.body = deletedTodo
}

async function update(ctx) {
  // Find todo by id and toggle done
  const id = ctx.params.id
  const todo = await Todo.findById(id)
  todo.done = !todo.done

  // Update todo in db
  const updateTodo = await todo.save()
  ctx.body = updateTodo
}

module.exports = {
  findAll,
  create,
  destroy,
  update
}