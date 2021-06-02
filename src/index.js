const { json } = require('express')
const express = require('express')

const app = express()

app.use(express.json)

app.get('/project', (request, response) => {
    const { title, owner } = request.query

    console.log(title)
    console.log(owner)
})

app.post('/projects', (request, response) => {
    const { title, owner } = request.body
    
})

app.put('/projects/:id', (request, response) => {
    const { id } = request.params
    
})

app.delete('/projects/:id', (request, response) => {
    const { id } = request.params    
})

app.listen(3333, () => {
    console.log("🚀 Back-end started!")
})



