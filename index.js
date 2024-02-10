const express = require('express')
const bodyParser = require('body-parser')
const router = require('./routes/routes')
const app = express()

const port = 2525

app.use(bodyParser.json())

app.use('/', router)

app.listen(port, () => {
  console.log(`Server started on port: http://localhost:${port}`);
})