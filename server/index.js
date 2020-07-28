const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
var bodyParser = require('body-parser');
const port = 3000;

app.use(cors());
app.use(express.static(path.join(__dirname + '/../src/dist')));
// app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());


const query = require('../database/queries.js');
app.get('/plans', query.getTrip);
app.post('/plans', query.postTrip);
app.patch('/plans', query.deleteTrip);


app.get('/past', query.getCountry);
app.post('/past', query.postCountry);

app.listen(port, () => console.log(`App listening on port ${port}`));