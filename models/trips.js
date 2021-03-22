const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Trip extends Model {}

Trip.init(
  {
    trip_id:{
      type: DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true,
      allowNull:true
  },
    trip_budget: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    traveller_amount:{
      type: DataTypes.INTEGER,
      allowNull:false
    },
    traveller_id:{
    type: DataTypes.INTEGER,
   
    
    },
    location_id:{
  type: DataTypes.INTEGER,
 
  
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Trip'
  }
);

module.exports = Trip;
