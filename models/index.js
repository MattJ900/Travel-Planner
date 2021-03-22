const Location = require('./location')
const Traveller = require('./traveller');
const Trip = require('./trips')


Traveller.hasOne(Location, {
  foreignKey: 'traveller_id',
  onDelete: 'CASCADE',
});

Traveller.hasMany(Trip, {
  foreignKey: 'traveller_id',
  onDelete: 'CASCADE',
});

Location.belongsTo(Traveller, {
  foreignKey: 'traveller_id',
});

Trip.belongsTo(Traveller, {
  foreignKey: 'traveller_id',
});

module.exports = { Traveller, Location, Trip};
