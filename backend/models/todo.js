const mongoose = require('mongoose')

// Schema
const TodoSchema = new mongoose.Schema(
    {
        description: { type: String },
        done: { type: Boolean}
    },
    { timestamps: true }
)

// Model
const Todo = mongoose.model('Todo', TodoSchema)

module.exports = mongoose.model('Todo')