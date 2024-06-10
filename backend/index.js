// Import necessary libraries
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Import routes
const methodologiesRouter = require('./routes/MethodologiesRoute');  // Ensure you have this file set up
const methodeRouter = require('./routes/MethodeRoute');  // Ensure you have this file set up
const outilsRouter = require('./routes/OutilsRoute');  // Ensure you have this file set up

// Load environment variables
dotenv.config();

// Create an Express application
const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully.'))
.catch(err => console.error('MongoDB connection failed:', err));

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies

// Use routes
app.use('/api/methodologies', methodologiesRouter);
app.use('/api/methodes', methodeRouter);
app.use('/api/outils', outilsRouter);

// Home route for simple testing
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Server port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
