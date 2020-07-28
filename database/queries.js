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

var deleteTrip = (req, res) => {
  var toDelete = req.body;
  sequelize.Plans.destroy({
    where: { id: toDelete.id }
  })
    .then(deletedPlan => console.log(`success = 1 , fail = 0: ${deletedPlan}`))
    .then(() => sequelize.Plans.findAll() )
    .then(result => res.send(result))
    .catch(err => console.err(error));
};


var getCountry = (req, res) => {
  sequelize.Past.findAll()
    .then(result => res.send(result))
    .catch(error => console.log(error));
};


var postCountry = (req, res) => {
  var past = req.body;
  sequelize.Past.create({countries: past.country})
    .then( () => res.send('Success!') )
    .catch( err => console.error(err));
};


module.exports.postTrip = postTrip;
module.exports.getTrip = getTrip;
module.exports.deleteTrip = deleteTrip;
module.exports.postCountry = postCountry;
module.exports.getCountry = getCountry;