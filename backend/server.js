const mongoose = require('mongoose');
const express = require('express')

const schema = mongoose.Schema({
	firstName: String,
	lastName: String,
})

const User = mongoose.model("User", schema)

mongoose
	.connect("mongodb://root:example@mongo:27017/test?authSource=admin", { useNewUrlParser: false })
	.then(() => {
        const app = express()
        const port = 3001
        
        app.get('/', async (req, res) => {
          const user = new User({firstName: 'first name test', lastName: 'last name test'})
          await user.save()
          res.send('Hello World!')
        })
        
        app.listen(port, () => {
          console.log(`Example app listening at http://localhost:${port}`)
        })
	})
