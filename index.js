const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Request logger middleware to log method, path, and response status code
app.use((req, res, next) => {
  res.on('finish', () => {
    console.log(`[LOG] ${req.method} ${req.originalUrl} - Status Code: ${res.statusCode}`);
  });
  next();
});

// Task 5: Route 1 - GET / (welcome text)
app.get('/', (req, res) => {
  res.status(200).send('Welcome to the Lab 1 Express Web Server!');
});

// Task 5: Route 2 - GET /about (JSON with student details)
app.get('/about', (req, res) => {
  res.status(200).json({
    name: process.env.STUDENT_NAME || 'Vinod Kumar',
    regNo: process.env.STUDENT_REG_NO || '252U1R1184',
    section: process.env.STUDENT_SECTION || 'CSE-2D',
    course: 'Backend Development Fundamentals',
    lab: 'Lab 1: Node.js and Express server'
  });
});

// Task 5: Route 3 - GET /time (current date and time using new Date())
app.get('/time', (req, res) => {
  res.status(200).json({ currentTime: new Date().toString() });
});

// Getting Today's Date (NxtWave slide format)
app.get('/date', (request, response) => {
  let date = new Date();
  response.send(`Today's date is ${date}`);
});

// Task 6: Return a 404 message for any unknown path
app.use((req, res) => {
  res.status(404).json({
    error: 'Not Found',
    message: `The requested path '${req.originalUrl}' does not exist on this server.`,
    statusCode: 404
  });
});

// Task 4: Listen on port 3000
app.listen(PORT, () => {
  console.log(`Express server is running on http://localhost:${PORT}`);
});

module.exports = app;
