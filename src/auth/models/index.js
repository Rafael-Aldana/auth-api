'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const clothesModel = require('../../models/clothes/model');
const foodModel = require('../../models/food/model');
const Collection = require('../../models/data-collection');
const userModel = require('./users.js');
 
const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory:';

const sequelize = new Sequelize(DATABASE_URL);
const food = foodModel(sequelize, DataTypes);
const clothes = clothesModel(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  food: new Collection(food),
  clothes: new Collection(clothes),
  users: userModel(sequelize, DataTypes),
};
