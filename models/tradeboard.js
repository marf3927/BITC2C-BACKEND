'use strict';

module.exports = (sequelize, DataTypes) => {
    var TBoard = sequelize.define('TBoard', {

        type: DataTypes.STRING,

        amount: DataTypes.INTEGER,

        price: DataTypes.INTEGER,

        date: DataTypes.DATE,

        method: DataTypes.STRING,

        status: DataTypes.INTEGER,

    });

    TBoard.associate = function (models) {
        TBoard.belongsTo(models.User,{
            as: 'seller',
            foreignkey: 'id'
        });
        TBoard.belongsTo(models.User, {
            as: 'buyer',
            foreignkey: 'id'
        });
    };

    return TBoard;
};