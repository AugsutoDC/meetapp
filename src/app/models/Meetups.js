import Sequelize, { Model } from 'sequelize';

class Meetups extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        description: Sequelize.STRING,
        location: Sequelize.STRING,
        date: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user',
    });
    this.belongsTo(models.File, {
      foreignKey: 'file_id',
      as: 'file',
    });
  }
}

export default Meetups;
