const {Router} = require('express')
const router = Router()
const Task = require('../models/taskModel')

router.get('/', async (req, res) => {
  const tasks = await Task.find()
  res.json(tasks)
})

router.post('/', async (req, res) =>{
  const task  = new Task(req.body)
  await task.save()
  res.json({status:'saved '})
})

router.put('/:id', async (req, res) =>{
  await Task.findByIdAndUpdate(req.params.id,req.body)
  res.json({status:'updated'})
})

router.put('/:id', async (req, res) =>{
  await Task.findByIdAndRemove(req.params.id)
  res.json({status:'delited '})
})


module.exports = router