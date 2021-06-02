const express = require('express')

const app = express()

app.get('/project', (request, response) => {
    return response.json({message: 'Hello World'})
})

app.post('/projects', (request, response) => {
    
})

app.put('/projects/:id', (request, response) => {
    
})

app.delete('/projects/:id', (request, response) => {
    
})

app.listen(3333, () => {
    console.log("🚀 Back-end started!")
})



