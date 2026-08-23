const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// Safely require trainees route
const traineesRouter = require('./routes/trainees');

// Quick check to confirm router is loaded
if (typeof traineesRouter === 'function' || (traineesRouter && traineesRouter.name === 'router')) {
  app.use('/api/trainees', traineesRouter);
} else {
  console.log('⚠️ traineesRouter failed to load properly. Value:', traineesRouter);
}

app.get('/', (req, res) => {
  res.send('SIH Backend API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});