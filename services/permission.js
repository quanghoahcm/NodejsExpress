const Sequelize = require('sequelize');

const sequelize = new Sequelize('db_projects','sa','25012018x@X',{
    host:'localhost',
    dialect:'mssql',
    operatorsAliases: false,
    pool:{
        max: 5,
        min: 0,
        acquire:30000,
        idle: 10000
    }
});

sequelize.authenticate()
          .then(()=>{
              console.log('Connection has been success');
          })
          .catch(err=>{
              console.error('Unable to connect to database', err);
          });
// const Permission = sequelize.define('Permission',{
//     id: {
//         type: Sequelize.INT
//     },
//     name: {
//         type: Sequelize.STRING
//     }
// });
// Permission.sync({force: true}).then(()=>{
//     return Permission.create({
//         id: 1,
//         name: 'can_edit'
//     })
// });

// permissions = await Permission.findAll().then(permission =>{
//     console.log(permission);
// })
// console.log(permissions);
