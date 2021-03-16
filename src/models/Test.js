import Sequelize, { Model } from 'sequelize';

export default class Test extends Model {
  static init(sequelize) {
    super.init({
      example: {
        type: Sequelize.STRING,
      },
    }, {
      sequelize,
    });
    return this;
  }
}
