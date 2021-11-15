const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const path = require('path')
const cons = require('consolidate');

const app = express()

// Environment Variable
dotenv.config({ path: 'config.env' })

// Middlewares
app.use(cors())
app.use(express.json())

// to Access the html attribute name
app.use(express.urlencoded({extended: false}))



// View engine setup
app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'views'));
app.set('view-engine', 'html');



// Rendering Authentication
const admin= require('./controller/renderAdmin')
app.use('/', admin)



// Dashboard adding cases
const cases = require('./controller/routes')
app.use('/', cases )



const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server is listening at port ${port}`))