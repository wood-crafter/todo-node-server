const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

const USERS = [
  { username: 'vnanne', password: '1' },
  { username: 'gogi', password: '1' },
  { username: 'aiinauu', password: '1' }
]

app.get('/', function (req, res) {
  res.send("App listening");
})

app.post('/login', function (req, res) {
  const username = req.username
  const password = req.password

  USERS.forEach(element => {
    if (element.username === username && element.password === password) {
      res.send({
        code: 200,
        data: {
          username,
          password
        }
      })
    }
  })

  res.send({
    code: 201
  })
})

app.listen(9083, () => {
  console.log(`App listening on port 9083`)
})