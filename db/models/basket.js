const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Basket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Card }) {
      this.belongsTo(User, { foreignKey: 'b_user_id' });
      this.belongsTo(Card, { foreignKey: 'b_card_id' });
    }
  }
  Basket.init({
    b_user_id: DataTypes.INTEGER,
    b_card_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Basket',
  });
  return Basket;
};
