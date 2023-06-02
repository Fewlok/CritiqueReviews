const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (user) => {
  return jwt.sign({...user}, process.env.SECRET)
}

// login a user
const loginUser = async (req, res) => {
  const {email, password} = req.body

  try {
    const user = await User.login(email, password)

    // create a token
    const token = createToken(user)

    res.status(200).json({email, token, username: user.username})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// signup a user
const signupUser = async (req, res) => {
  const {email, username, password} = req.body

  try {
    const user = await User.signup(email, password, username)

    // create a token
    const token = createToken(user)

    res.status(200).json({email, token, username})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

module.exports = { signupUser, loginUser }