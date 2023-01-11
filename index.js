const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/', function (req, res) {
  res.send("App listening");
})

app.listen(9083, () => {
  console.log(`App listening on port 9083`)
})