'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Producers', [{
      name: "Producer",
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        name: "Producer2",
        createdAt: new Date(),
        updatedAt: new Date()
      }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Producers', null, {});
  }
};
