const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const routesNavigation = require('./src/routesNavigation')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.status(200).send('Hello get')
})

app.use('/', routesNavigation)

app.get('*', (req, res) => {
  res.status(404).send('path not found!')
})

app.listen(3405, () => {
  console.log('Server started on port 3405')
})
