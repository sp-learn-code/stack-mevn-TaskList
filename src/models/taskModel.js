const {Schema, model} = require('mongoose')

const Task = new Schema({
  title: String,
  description: String
})

module.exports = model('Task',Task)

