const express = require('express')
const mongodb = require('mongodb')
const router = express.Router()

//  Get Post
router.get('/dashboard', async (req, res) => {
	try {
    res.render('dashboard.html')
		const posts = await database()
		res.send(await posts.find({}).toArray())
	} catch (err) {
		console.log(err, 'There is an error in the get post')
	}
})

//  Add Post

router.post('/dashboard', async (req, res) => {
	try {
		const posts = await database()
		await posts.insertOne({
            date: new Date(),
            brgy: req.body.brgy,
            numCases: req.body.cases,
            recoveries: req.body.recoveries,
            death: req.body.death,
            suspected: req.body.suspected,
		})
		res.status(201).send()
	} catch (err) {
		console.log(err, 'Error from the Post or Add Posts')
	}
})

// // Delete Post

// // router.delete('/:id', async (req, res) => {
// // 	try {
// // 		const posts = await database()
// // 		await posts.deleteOne({ _id: new mongodb.ObjectId(req.params.id) })
// // 		res.status(200).send()
// // 	} catch (err) {
// // 		console.log(err, 'Error from the Delete Post')
// // 	}
// // })

// Update Post
router.put('/dashboard/:id', async (req, res) => {
  try {
    const posts = await database()
    await posts.updateOne(
      { _id: new mongodb.ObjectId(req.params.id) },
      {
        $set: {
            date: new Date(),
            brgy: req.body.brgy,
            numCases: req.body.cases,
            recoveries: req.body.recoveries,
            death: req.body.death,
            suspected: req.body.suspected,
        },
      }
    )
  } catch (err) {
    console.log(err, 'The error is at the update posts')
  }
})

// Connect to Database

async function database() {
	const client = await mongodb.MongoClient.connect(process.env.MONGO_URI, {
		useNewUrlParser: true
	})

	return client.db('users').collection('cases')
}

module.exports = router
