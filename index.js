const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;
const game = require('./lib/game');

app.use(cors())

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/game', game);

app.listen(port, () => console.log(`running on http://localhost:${port}`))