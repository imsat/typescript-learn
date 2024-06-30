import express from 'express'
let app = express()

app.get('/hello', function (req, res) {
    res.send('Hello from Express with Typescript with nodemon AND ts-node')
})

app.listen(8000, function () {
    console.log('Server is listing on port 8000')
})