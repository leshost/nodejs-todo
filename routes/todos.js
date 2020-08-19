const { Router } = require('express')
const Todo = require('../models/Todo.js')
const mongoose = require('mongoose')
const router = Router()

router.get('/', async (req, res) => {
    const todos = await mongoose.model('Todo').find({})
    
    res.render('index', {
        title: 'Todos List',
        isIndex: true,
        todos
    })
})

router.get('/create', (req, res) => {
    res.render('create', {
        title: 'Create todo',
        isCreate: true
    })
})

router.post('/create', async (req, res) => {
    const todo = new Todo({
        title: req.body.title
    })

    await todo.save()
    res.redirect('/')
})

module.exports = router