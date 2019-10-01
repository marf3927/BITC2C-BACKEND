
module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define('User', {

        email: DataTypes.STRING,

        password: DataTypes.STRING,

        name: DataTypes.STRING,

        phone: DataTypes.STRING,

        date: DataTypes.DATE,

        history: DataTypes.DATE,

        point: DataTypes.INTEGER,

        wallet: DataTypes.STRING

    }, {});

    // User.associate = function (models) {
    //     User.hasMany(models.TBoard);
    // };

    return User;
};