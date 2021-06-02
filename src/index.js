const express = require('express')
const { uuid } = require('uuidv4')

const app = express()

app.use(express.json())

const projects = []

app.get('/projects', (request, response) => {
    // const { title, owner } = request.query

    return response.json(projects)
})

app.post('/projects', (request, response) => {
    const { title, owner } = request.body

    const project = { id: uuid(), title, owner}

    projects.push(project)

    return response.json(project)
    
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



