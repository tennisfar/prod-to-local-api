const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 3000;

const corsOptions = {
  origin: 'https://web.develop.danskespil.dk',
  credentials: true
};

app.use(cors(corsOptions));

// Root endpoint to display a list of available endpoints
app.get('/', (req, res) => {
  res.send(`
    <h1>Available Endpoints</h1>
    <ul>
      <li><a href="/dli/scapi/danskespil/gamevendorgvc/lobby">/dli/scapi/danskespil/gamevendorgvc/lobby</a></li>
    </ul>
  `);
});

app.get('/dli/scapi/danskespil/gamevendorgvc/lobby', async (req, res) => {
  try {
    const response = await axios.get('https://danskespil.dk/dli/scapi/danskespil/gamevendorgvc/lobby?currencyCode=DKK&brandId=DANSKESPIL');
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching data');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});