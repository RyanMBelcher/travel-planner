const Traveller = require('./Traveller');
const Location = require('./Location');
const Trip = require('./Trip');

// TODO Define the relationships between the models

Location.belongsToMany(Traveller, {
    through: Trip,
});

Traveller.belongsToMany(Location, {
    through: Trip,
})

module.exports = { Traveller, Location, Trip };
