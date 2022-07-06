const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ City, Card }) {
      this.belongsTo(City, { foreignKey: 'city_id' });
      this.hasMany(Card, { foreignKey: 'user_id' });
    }
  }
  User.init({
    name: DataTypes.STRING,
    pass: DataTypes.TEXT,
    email: DataTypes.STRING,
    city_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
