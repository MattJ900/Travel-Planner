const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Traveller extends Model {}

Traveller.init(
  {
        traveller_id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true, 
        allowNull:false
        },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email:{
        type: DataTypes.STRING,
        unique:true,
        allowNull:false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Traveller'
  }
);

module.exports = Traveller;
