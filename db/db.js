const config = require('../config/config');
const Sequelize = require('sequelize');
/*Пример подключение к БД типа PostgreSQL
const sequelize= new Sequelize(
    config.development.database,
    config.development.username,
    config.development.password,
    {
        host: config.development.host,
        dialect: config.development.dialect,

        define: {
            timestamps: true
        },

        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },

        logging: console.log,

    }
);
 */

const sequelize = new Sequelize('database', 'username', 'password', {
    // sqlite! now!
    dialect: config.development.dialect,
    // the storage engine for sqlite
    // - default ':memory:'
    storage: config.development.storage
})
const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

//Models/tables
db.User = require('../models/user')(sequelize, Sequelize);
db.Role = require('../models/role')(sequelize, Sequelize);
db.Producer = require('../models/Producer')(sequelize, Sequelize);
db.Product = require('../models/Product')(sequelize, Sequelize);


//Связывание моделей без импорта файлов ( то есть, чтобы в файле описания любой модели можно было
//обращаться к другим моделям без их импорта в виде require(...))
Object.keys(db).forEach(key => {
    if (db[key] && db[key].associate) {
        db[key].associate(db);
    }
});

//это второй способ установки отношений между моделями
// db.teacherRank.hasMany(db.teacher, {foreignKey: 'teacher_rank_id'});
// db.teacher.belongsTo(db.teacherRank, {foreignKey: 'teacher_rank_id'});
//sequelize.sync()

module.exports = db;
