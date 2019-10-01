'use strict';

module.exports = (sequelize, DataTypes) => {
    var THistory = sequelize.define('THistory', {

        type: DataTypes.STRING,

        amount: DataTypes.INTEGER,

        price: DataTypes.INTEGER,

        date: DataTypes.DATE,

        method: DataTypes.STRING,

        status: DataTypes.INTEGER,

    });

    THistory.associate = function (models) {
        THistory.belongsTo(models.User, {
            as: 'seller',
            foreignkey: 'userId'
        });
        THistory.belongsTo(models.User, {
            as: 'buyer',
            foreignkey: 'userId'
        });
    };

    return THistory;
};