const {Sequelize, Model} = require('sequelize');
const Config = require('./config.json');

const sequelize = new Sequelize(
  Config.database,
  Config.username,
  Config.password,
  {
    host: Config.host,
    dialect: 'mysql'
  }
);

// const setUp = `CREATE DATABASE IF NOT EXISTS ${Config.database};`;

sequelize.authenticate()
  .then ( () => console.log('Connection has been established successfully.') )
  .catch( error => console.error('Unable to connect to the database:', error) );


class Plans extends Model {}

Plans.init({
  destination: {
    type: Sequelize.STRING,
    allowNull: true
  },
  start: {
    type: Sequelize.STRING,
    allowNull: true
  },
  end: {
    type: Sequelize.STRING,
    allowNull: true
  },
  image: {
    type: Sequelize.BLOB('long'),
    allowNull: true
  }
  //pass connection instanse and model name
}, { sequelize, moduelName: 'plans'} );

Plans.sync()
  .catch( err => console.error(err));


var postTrip = (req, res) => {
  var plans = req.body;
  console.log(plans.destination.toString())
  Plans.create({destination: plans.destination.toString(), start: plans.start.toString(), end: plans.end.toString()})
    .then( () => res.end )
    .catch( err => console.error(err));
};

module.exports.sequelize = sequelize;
module.exports.Plans = Plans;
module.exports.postTrip = postTrip;