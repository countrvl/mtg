const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate({ Сondition, User, Basket }) {
      this.belongsTo(Сondition, { foreignKey: 'condition_id' });
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.hasMany(Basket, { foreignKey: 'b_cards_id' });
    }
  }
  Card.init({
    title: DataTypes.STRING,
    img: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
    condition_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Card',
  });
  return Card;
};
