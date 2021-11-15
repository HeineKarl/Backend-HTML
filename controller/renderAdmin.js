const path = require('path')
const express = require('express')
const render = express.Router()
const mongodb = require('mongodb')
const bcrypt = require('bcrypt')





// Login Get
render.get('/login', (req,res) => {
    res.render('login.html')
})

// Login Post
render.post('/login', (req, res) => {

})

// Register Get
render.get('/register', (req,res) => {
    res.render('register.html')
})

// Register Post
render.post('/register', async (req,res) => {

    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const postRegister = await adminDatabase()

        await postRegister.insertOne({
            date: new Date(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })

        res.redirect('/login')


    } catch(err) {
        console.log("Error in the Register Post");
        res.redirect('/register')
    }


})

// // Dashboard Get
// render.get('/dashboard', (req,res) => {
//     res.render('dashboard.html')
// })

// // Dashboard Post
// render.post('/dashboard', (req, res) => {
    
// })



async function adminDatabase() {
    const admin = await mongodb.MongoClient.connect(process.env.MONGO_ADMIN, {
        useNewUrlParser: true
    })

    return admin.db('users').collection('admin')
}



module.exports = render