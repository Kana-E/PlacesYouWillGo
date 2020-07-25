const express = require('express');
const app = express();
const patj = require('path');
const cors = require('cors');
const port = 3000;

app.use(cors());
app.use(express.static(__dirname + ))