const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(`<h1>Hello World!<h1>`)
})

app.get('/about', (req, res) => {
  res.send(`<h1>This is about page!<h1>`)
})

app.get('/contact', (req, res) => {
  res.send(`<h1>This is contact page!<h1>`)
})

app.get('/info', (req, res) => {
  res.send(`<h1>This is info page!<h1>`)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
