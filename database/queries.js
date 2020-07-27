const {Sequelize, Model} = require('sequelize');
const Config = require('./config.json');
const sequelize = require('./index.js');
const Plans = require('./index.js');


var getTrip = (req, res) => {
  sequelize.Plans.findAll()
    .then(result => res.send(result))
    .catch(error => console.log(error));
};


var postTrip = (req, res) => {
  var plans = req.body;
  // console.log(Plans)
  sequelize.Plans.create({destination: plans.destination.toString(), start: plans.start.toString(), end: plans.end.toString()})
    .then( () => res.send('Success!') )
    .catch( err => console.error(err));
};

module.exports.postTrip = postTrip;
module.exports.getTrip = getTrip;