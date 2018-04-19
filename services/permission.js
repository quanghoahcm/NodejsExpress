import { Module } from 'module';
const Sequelize = require('sequelize');
import { config_sequelize } from "../models/config";

let Per;
console.log(config_sequelize);

const sequelize = new Sequelize(config_sequelize);

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been success');
  })
  .catch(err => {
    console.error('Unable to connect to database', err);
  });
  Per = sequelize['import']("../models/permission.js")
// if table not exit then create table and insert colume record  
// Permission.sync({ force: true }).then(() => {
//   return Permission.create({    
//     name: 'can_edit'
//   })
// });
const getAllPermissions = async () =>{
  return await Per.findAll();
} 
 

 module.exports ={
      getAllPermissions,
 }

