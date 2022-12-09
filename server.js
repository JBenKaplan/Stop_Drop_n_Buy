const express = require('express')
const user = require('./routes/UserRouter')
const auth = require('./routes/AuthRouter')
const db = require('./db')
const cors = require('cors')
// require() imports and middleware here ^ ///////

const PORT = process.env.PORT || 3001

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static(`${__dirname}/client/build`))

// app.use() middleware here ^ ///////////////////

app.use('/user', user)
app.use('/auth', auth)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
