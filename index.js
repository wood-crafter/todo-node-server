const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const USERS = [
  { username: 'vnanne', password: '1' },
  { username: 'gogi', password: '1' },
  { username: 'aiinauu', password: '1' }
]

app.get('/', function (req, res) {
  res.send("App listening");
})

app.post('/login', function (req, res) {
  const username = req.body.username
  const password = req.body.password

  for(const element of USERS) {
    if (element.username === username && element.password === password) {
      res.send({
        code: 200
      })
      return
    }
  }

  res.send({
    code: 201
  })
})

app.listen(9083, () => {
  console.log(`App listening on port 9083`)
})