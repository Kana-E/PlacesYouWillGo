const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
var bodyParser = require('body-parser');
const port = 3000;

app.use(cors());
app.use(express.static(path.join(__dirname + '/../src/dist')));
// parse application/json
app.use(bodyParser.json());


const query = require('../database/index.js');
app.post('/plans', query.postTrip);

app.listen(port, () => console.log(`App listening on port ${port}`));