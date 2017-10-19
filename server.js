'use strict'
//Import Dependencies
//Initialize express
const express = require('express');
const app = express()
const path = require("path")
const bodyParser = require('body-parser');
const session = require('express-session');
const Promise = require('promise');
const expressValidator = require('express-validator');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({ secret: 'expresspasskey' }));
app.use(expressValidator());

//DB stuff
require('./server/utils/mongoose');

//Start customized middleware
require('./server/utils/middleware')(app)

// Route and route logic
require('./server/utils/routes')(app)

const bcrypt = require("bcrypt")


app.listen(1337, function () {
	console.log('Running on the 1337 port!');
})
