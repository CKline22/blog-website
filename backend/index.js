const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.get('/login', (req, res) => {
    res.send('Login')
})

app.listen(3001, () => {
    console.log("server started on port 3001")
})