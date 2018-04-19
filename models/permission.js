const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    var Permission = sequelize.define('Permission', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey:true,
          autoIncrement:true
        },
        name: {
          type: Sequelize.STRING
        }
      });
  
    return Permission;
  };
