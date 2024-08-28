
// const express = require('express');
const express = require('express');
// const todoRoutes = require('./models/routes/todoRoutes');  // Correct relative path to todoRoutes.js

const mongoose = require('mongoose');
// const todoRoutes = require('./routes/todoRoutes');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(express.json()); // This is important for parsing JSON bodies

// Routes

const todoRoutes = require('./models/routes/todoRoutes');
// app.use('/api', todoRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 50000
})
.then(() => {
  console.log('Successfully connected to MongoDB');
})
.catch(err => {
  console.error('Failed to connect to MongoDB', err);
});

// Error handling for routes
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal server error' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.get('/test', (req, res) => {
  res.json({ message: 'Test route working' });
});
