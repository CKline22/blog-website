const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://localhost:27017'/blog-login)

app.post('/api/login', async (req, res) => {
    console.log(req.body)
    try {
        const user = await User.create({
            username: req.body.username,
            password: req.body.password,
        })
        res.json({status: 'ok'})
    } catch (err) {
        res.json({ status: 'error', error: 'wrong password'})
    }
    res.json({status: 'ok'})
})

app.listen(3001, () => {
    console.log("server started on port 3001")
})