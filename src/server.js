require('dotenv').config({path: "../.env"})
const express = require("express")
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require("mongoose")
const {Schema, model} = mongoose

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
const PORT = process.env.PORT || 3001


//connect to mongodb
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

//create user schema
const userSchema = new Schema({
  name: String,
  age: String,
  email: String
})

//create user model
const User = model("User", userSchema)

//create get method, find the user profiles and pass it to main component
app.get("/users", async (req, res) => {
  try {
    User.find({}).then((foundUsers) => {
      res.json(foundUsers)
    })
  } catch(err) {
    console.log(err)
  }
})

//create a new user, put data that get from component and store it to mongodb
app.post("/users", (req, res) => {
  const {name, age, email} = req.body
  const user = new User({
    name,
    age,
    email
  })
  user.save().then(() => {
    //not working
    res.redirect("http://localhost:3000/users")
  }).catch((err) => {
    console.log(err)
  })
})

app.put("/users/:id", async (req, res) => {
  const {id} = req.params
  try {
    User.updateOne({_id: id}, {$set: req.body}).then(() => {
      res.redirect("/users")
    })
  } catch(err) {
    console.log(err)
  }
})

//get id of user that want to delete and match with mongodb and delete
app.delete("/users/:id", async (req, res) => {
  const {id} = req.params
  try {
    User.deleteOne({_id: id}).then((foundUser) => {
      if (foundUser) {
        console.log("Successfully delete the user profile")
      } else {
        console.log("No matches")
      }
    })
  } catch(err) {
    console.log(err)
  }
  //Problem 3: redirect is not working (Solved inside delete component, but this is still not working)
  res.redirect("http://localhost:3000/users")
})

connectDB().then(() => {
  app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
  })
})