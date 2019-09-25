const Sequelize = require('sequelize')


const sequelize = new Sequelize(
    'test',
    'kim',
    'kim',
    {
        'host':'localhost',
        'dialect':'mysql'
    }

);

sequelize.authenticate().then(()=>{
    console.log('Connection has been established successfully.');
}).catch(err =>{
    console.error('Unable to connect to the database',err);
});

const User = sequelize.define('user', {
    // attributes
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING
      // allowNull defaults to true
    }
  }, {
    // options
  });

sequelize.close()