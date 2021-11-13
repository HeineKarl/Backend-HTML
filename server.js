const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')



const app = express()

dotenv.config({ path: 'config.env' })


app.use(cors())
app.use(express.json())


const cases = require('./routes')

app.use('/api/cases', cases )



const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server is listening at port ${port}`))