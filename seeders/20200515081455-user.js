'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      login: "test",
      password: "123",
      email: "test@test.ru",
      role_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        login: "admin",
        password: "123",
        email: "admin@test.ru",
        role_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
