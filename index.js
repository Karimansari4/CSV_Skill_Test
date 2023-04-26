const express = require('express')
const app = express()
const cors = require('cors')
const db = require('./DBConfig/db')
const empRouter = require('./Routes/EmployeesRoute')
const stRoute = require('./Routes/Student')
const intRoute = require('./Routes/Interview')
const reportRoute = require('./Routes/Report')
const port = 4000

app.use(express.json())
app.use(cors())

db()

app.get('/', (req,res) => res.send('Hello World!'))

app.use('/empAuth', empRouter)
app.use('/student', stRoute)
app.use('/interview', intRoute)
app.use('/report', reportRoute)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})