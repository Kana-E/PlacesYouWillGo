const express = require('express');
const app = express();
const patj = require('path');
const cors = require('cors');
const path = require('path');
const port = 3000;

app.use(cors());
app.use(express.static(path.join(__dirname + '/../src')));

app.get('/', (req, res) => res.send('Hello World'));


app.listen(port, () => console.log(`App listening on port ${port}`));