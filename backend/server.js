require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const express = require('express')
const userRoutes = require('./routes/user')

// express app
const app = express()

// middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors());

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/user', userRoutes)

// Connect to MongoDB Atlas
const uri = process.env.MONGO_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');

    // Blog Routes
    const blogRoutes = require('./routes/blogRoutes');
    app.use('/blogs', blogRoutes);

    // Start the server
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  })
  
  .catch(err => {
    console.error('Error connecting to MongoDB:', err.message);
  });