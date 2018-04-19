module.exports = {
    config : {
        user: 'sa',
        password: '25012018x@X',
        server: 'LQUANGHOA\\SQLEXPRESS',
        database: 'db_projects'
    },
    config_sequelize: {
        database: "db_projects",
        username: "sa",
        password:  "25012018x@X",
        host: 'localhost',
        dialect: 'mssql',
        operatorsAliases: false,
        pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000
        }
      }

};
